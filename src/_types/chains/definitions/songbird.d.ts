export declare const songbird: {
    blockExplorers: {
        readonly default: {
            readonly name: "Songbird Explorer";
            readonly url: "https://songbird-explorer.flare.network";
            readonly apiUrl: "https://songbird-explorer.flare.network/api";
        };
    };
    contracts?: {
        [x: string]: import("../../index.js").ChainContract | {
            [sourceId: number]: import("../../index.js").ChainContract | undefined;
        } | undefined;
        ensRegistry?: import("../../index.js").ChainContract | undefined;
        ensUniversalResolver?: import("../../index.js").ChainContract | undefined;
        multicall3?: import("../../index.js").ChainContract | undefined;
    } | undefined;
    id: 19;
    name: "Songbird Mainnet";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "songbird";
        readonly symbol: "SGB";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://songbird-api.flare.network/ext/C/rpc"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=songbird.d.ts.map