import { TimeoutError } from '../../errors/request.js';
import { createBatchScheduler, } from '../promise/createBatchScheduler.js';
import { withTimeout } from '../promise/withTimeout.js';
import { idCache } from './id.js';
export const socketClientCache = /*#__PURE__*/ new Map();
export async function getSocketRpcClient(params) {
    const { getSocket, reconnect = true, url } = params;
    const { attempts = 5, delay = 2_000 } = typeof reconnect === 'object' ? reconnect : {};
    let socketClient = socketClientCache.get(url);
    // If the socket already exists, return it.
    if (socketClient)
        return socketClient;
    let reconnectCount = 0;
    const { schedule } = createBatchScheduler({
        id: url,
        fn: async () => {
            // Set up a cache for incoming "synchronous" requests.
            const requests = new Map();
            // Set up a cache for subscriptions (eth_subscribe).
            const subscriptions = new Map();
            let error;
            let socket;
            // Set up socket implementation.
            async function setup() {
                return getSocket({
                    onError(error_) {
                        error = error_;
                        // Notify all requests and subscriptions of the error.
                        for (const request of requests.values())
                            request.onError?.(error);
                        for (const subscription of subscriptions.values())
                            subscription.onError?.(error);
                        // Clear all requests and subscriptions.
                        requests.clear();
                        subscriptions.clear();
                        // Attempt to reconnect.
                        if (reconnect && reconnectCount < attempts)
                            setTimeout(async () => {
                                reconnectCount++;
                                socket = await setup().catch(console.error);
                            }, delay);
                    },
                    onOpen() {
                        error = undefined;
                        reconnectCount = 0;
                    },
                    onResponse(data) {
                        const isSubscription = data.method === 'eth_subscription';
                        const id = isSubscription ? data.params.subscription : data.id;
                        const cache = isSubscription ? subscriptions : requests;
                        const callback = cache.get(id);
                        if (callback)
                            callback.onResponse(data);
                        if (!isSubscription)
                            cache.delete(id);
                    },
                });
            }
            socket = await setup();
            error = undefined;
            // Create a new socket instance.
            socketClient = {
                close() {
                    socket.close();
                    socketClientCache.delete(url);
                },
                socket,
                request({ body, onError, onResponse }) {
                    if (error && onError)
                        onError(error);
                    const id = body.id ?? idCache.take();
                    const callback = (response) => {
                        if (typeof response.id === 'number' && id !== response.id)
                            return;
                        // If we are subscribing to a topic, we want to set up a listener for incoming
                        // messages.
                        if (body.method === 'eth_subscribe' &&
                            typeof response.result === 'string')
                            subscriptions.set(response.result, {
                                onResponse: callback,
                                onError,
                            });
                        // If we are unsubscribing from a topic, we want to remove the listener.
                        if (body.method === 'eth_unsubscribe')
                            subscriptions.delete(body.params?.[0]);
                        onResponse(response);
                    };
                    requests.set(id, { onResponse: callback, onError });
                    try {
                        socket.request({
                            body: {
                                jsonrpc: '2.0',
                                id,
                                ...body,
                            },
                        });
                    }
                    catch (error) {
                        onError?.(error);
                    }
                },
                requestAsync({ body, timeout = 10_000 }) {
                    return withTimeout(() => new Promise((onResponse, onError) => this.request({
                        body,
                        onError,
                        onResponse,
                    })), {
                        errorInstance: new TimeoutError({ body, url }),
                        timeout,
                    });
                },
                requests,
                subscriptions,
                url,
            };
            socketClientCache.set(url, socketClient);
            return [socketClient];
        },
    });
    const [_, [socketClient_]] = await schedule();
    return socketClient_;
}
//# sourceMappingURL=socket.js.map