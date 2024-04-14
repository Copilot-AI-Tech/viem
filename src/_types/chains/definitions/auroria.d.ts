export declare const auroria: {
    blockExplorers: {
        readonly default: {
            readonly name: "Auroria Testnet Explorer";
            readonly url: "https://auroria.explorer.stratisevm.com";
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
    id: 205205;
    name: "Auroria Testnet";
    nativeCurrency: {
        readonly name: "Auroria Stratis";
        readonly symbol: "tSTRAX";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://auroria.rpc.stratisevm.com"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
    readonly network: "auroria";
};
//# sourceMappingURL=auroria.d.ts.map