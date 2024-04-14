export declare const filecoinHyperspace: {
    blockExplorers: {
        readonly default: {
            readonly name: "Filfox";
            readonly url: "https://hyperspace.filfox.info/en";
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
    id: 3141;
    name: "Filecoin Hyperspace";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "testnet filecoin";
        readonly symbol: "tFIL";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://api.hyperspace.node.glif.io/rpc/v1"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=filecoinHyperspace.d.ts.map