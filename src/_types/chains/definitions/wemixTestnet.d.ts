export declare const wemixTestnet: {
    blockExplorers: {
        readonly default: {
            readonly name: "wemixExplorer";
            readonly url: "https://testnet.wemixscan.com";
            readonly apiUrl: "https://testnet.wemixscan.com/api";
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
    id: 1112;
    name: "WEMIX Testnet";
    nativeCurrency: {
        readonly name: "WEMIX";
        readonly symbol: "tWEMIX";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://api.test.wemix.com"];
        };
        readonly public: {
            readonly http: readonly ["https://api.test.wemix.com"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
    readonly network: "wemix-testnet";
};
//# sourceMappingURL=wemixTestnet.d.ts.map