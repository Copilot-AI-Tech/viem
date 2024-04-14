export declare const flareTestnet: {
    blockExplorers: {
        readonly default: {
            readonly name: "Coston2 Explorer";
            readonly url: "https://coston2-explorer.flare.network";
            readonly apiUrl: "https://coston2-explorer.flare.network/api";
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
    id: 114;
    name: "Coston2";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "coston2flare";
        readonly symbol: "C2FLR";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://coston2-api.flare.network/ext/C/rpc"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=flareTestnet.d.ts.map