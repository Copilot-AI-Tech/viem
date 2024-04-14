export declare const oortMainnetDev: {
    blockExplorers: {
        readonly oort: {
            readonly name: "OORT MainnetDev Explorer";
            readonly url: "https://dev-scan.oortech.com";
        };
        readonly default: {
            readonly name: "OORT MainnetDev Explorer";
            readonly url: "https://dev-scan.oortech.com";
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
    id: 9700;
    name: "OORT MainnetDev";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "OORT";
        readonly symbol: "OORT";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://dev-rpc.oortech.com"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=oortmainnetDev.d.ts.map