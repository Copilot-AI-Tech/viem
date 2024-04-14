import type { ErrorType } from '../../errors/utils.js';
import type { RpcRequest, RpcResponse } from '../../types/rpc.js';
import { type CreateBatchSchedulerErrorType } from '../promise/createBatchScheduler.js';
type Id = string | number;
type CallbackFn = {
    onResponse: (message: any) => void;
    onError?: ((error?: Error | Event | undefined) => void) | undefined;
};
type CallbackMap = Map<Id, CallbackFn>;
export type GetSocketParameters = {
    onError: (error?: Error | Event | undefined) => void;
    onOpen: () => void;
    onResponse: (data: RpcResponse) => void;
};
export type Socket<socket extends {}> = socket & {
    close(): void;
    request(params: {
        body: RpcRequest;
    }): void;
};
export type SocketRpcClient<socket extends {}> = {
    close(): void;
    socket: Socket<socket>;
    request(params: {
        body: RpcRequest;
        onError?: ((error?: Error | Event | undefined) => void) | undefined;
        onResponse: (message: RpcResponse) => void;
    }): void;
    requestAsync(params: {
        body: RpcRequest;
        timeout?: number | undefined;
    }): Promise<RpcResponse>;
    requests: CallbackMap;
    subscriptions: CallbackMap;
    url: string;
};
export type GetSocketRpcClientParameters<socket extends {} = {}> = {
    getSocket(params: GetSocketParameters): Promise<Socket<socket>>;
    /**
     * Whether or not to attempt to reconnect on socket failure.
     * @default true
     */
    reconnect?: boolean | {
        /**
         * The maximum number of reconnection attempts.
         * @default 5
         */
        attempts?: number | undefined;
        /**
         * The delay (in ms) between reconnection attempts.
         * @default 2_000
         */
        delay?: number | undefined;
    } | undefined;
    url: string;
};
export type GetSocketRpcClientErrorType = CreateBatchSchedulerErrorType | ErrorType;
export declare const socketClientCache: Map<string, SocketRpcClient<{
    close(): void;
    request(params: {
        body: RpcRequest;
    }): void;
}>>;
export declare function getSocketRpcClient<socket extends {}>(params: GetSocketRpcClientParameters<socket>): Promise<SocketRpcClient<socket>>;
export {};
//# sourceMappingURL=socket.d.ts.map