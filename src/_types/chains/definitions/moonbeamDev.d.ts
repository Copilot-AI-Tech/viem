export declare const moonbeamDev: {
    blockExplorers?: {
        [key: string]: {
            name: string;
            url: string;
            apiUrl?: string | undefined;
        };
        default: {
            name: string;
            url: string;
            apiUrl?: string | undefined;
        };
    } | undefined;
    contracts?: {
        [x: string]: import("../../index.js").ChainContract | {
            [sourceId: number]: import("../../index.js").ChainContract | undefined;
        } | undefined;
        ensRegistry?: import("../../index.js").ChainContract | undefined;
        ensUniversalResolver?: import("../../index.js").ChainContract | undefined;
        multicall3?: import("../../index.js").ChainContract | undefined;
    } | undefined;
    id: 1281;
    name: "Moonbeam Development Node";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "DEV";
        readonly symbol: "DEV";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["http://127.0.0.1:9944"];
            readonly webSocket: readonly ["wss://127.0.0.1:9944"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=moonbeamDev.d.ts.map