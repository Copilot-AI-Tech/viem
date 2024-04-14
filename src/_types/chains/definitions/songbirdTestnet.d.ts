export declare const songbirdTestnet: {
    blockExplorers: {
        readonly default: {
            readonly name: "Coston Explorer";
            readonly url: "https://coston-explorer.flare.network";
            readonly apiUrl: "https://coston-explorer.flare.network/api";
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
    id: 16;
    name: "Coston";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "costonflare";
        readonly symbol: "CFLR";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://coston-api.flare.network/ext/C/rpc"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=songbirdTestnet.d.ts.map