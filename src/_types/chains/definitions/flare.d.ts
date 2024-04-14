export declare const flare: {
    blockExplorers: {
        readonly default: {
            readonly name: "Flare Explorer";
            readonly url: "https://flare-explorer.flare.network";
            readonly apiUrl: "https://flare-explorer.flare.network/api";
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
    id: 14;
    name: "Flare Mainnet";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "flare";
        readonly symbol: "FLR";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://flare-api.flare.network/ext/C/rpc"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=flare.d.ts.map