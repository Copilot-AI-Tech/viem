export declare const meterTestnet: {
    blockExplorers: {
        readonly default: {
            readonly name: "MeterTestnetScan";
            readonly url: "https://scan-warringstakes.meter.io";
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
    id: 83;
    name: "Meter Testnet";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "MTR";
        readonly symbol: "MTR";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpctest.meter.io"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=meterTestnet.d.ts.map