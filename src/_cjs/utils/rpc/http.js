"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHttpRpcClient = void 0;
const request_js_1 = require("../../errors/request.js");
const withTimeout_js_1 = require("../promise/withTimeout.js");
const stringify_js_1 = require("../stringify.js");
const id_js_1 = require("./id.js");
function getHttpRpcClient(url, options = {}) {
    return {
        async request(params) {
            const { body, fetchOptions = {}, onRequest = options.onRequest, onResponse = options.onResponse, timeout = options.timeout ?? 10_000, } = params;
            const { headers, method, signal: signal_, } = { ...options.fetchOptions, ...fetchOptions };
            try {
                const response = await (0, withTimeout_js_1.withTimeout)(async ({ signal }) => {
                    const request = new Request(url, {
                        ...fetchOptions,
                        body: Array.isArray(body)
                            ? (0, stringify_js_1.stringify)(body.map((body) => ({
                                jsonrpc: '2.0',
                                id: body.id ?? id_js_1.idCache.take(),
                                ...body,
                            })))
                            : (0, stringify_js_1.stringify)({
                                jsonrpc: '2.0',
                                id: body.id ?? id_js_1.idCache.take(),
                                ...body,
                            }),
                        headers: {
                            ...headers,
                            'Content-Type': 'application/json',
                        },
                        method: method || 'POST',
                        signal: signal_ || (timeout > 0 ? signal : null),
                    });
                    if (onRequest)
                        await onRequest(request);
                    let response;
                    const dispatcher = options?.fetchOptions?.dispatcher;
                    if (dispatcher) {
                        response = await fetch(request, { dispatcher });
                    }
                    else {
                        response = await fetch(request);
                    }
                    return response;
                }, {
                    errorInstance: new request_js_1.TimeoutError({ body, url }),
                    timeout,
                    signal: true,
                });
                if (onResponse)
                    await onResponse(response);
                let data;
                if (response.headers.get('Content-Type')?.startsWith('application/json'))
                    data = await response.json();
                else
                    data = await response.text();
                if (!response.ok) {
                    throw new request_js_1.HttpRequestError({
                        body,
                        details: (0, stringify_js_1.stringify)(data.error) || response.statusText,
                        headers: response.headers,
                        status: response.status,
                        url,
                    });
                }
                return data;
            }
            catch (err) {
                if (err instanceof request_js_1.HttpRequestError)
                    throw err;
                if (err instanceof request_js_1.TimeoutError)
                    throw err;
                throw new request_js_1.HttpRequestError({
                    body,
                    details: err.message,
                    url,
                });
            }
        },
    };
}
exports.getHttpRpcClient = getHttpRpcClient;
//# sourceMappingURL=http.js.map