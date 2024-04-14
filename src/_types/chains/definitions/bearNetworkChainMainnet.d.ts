export declare const bearNetworkChainMainnet: {
    blockExplorers: {
        readonly default: {
            readonly name: "BrnkScan";
            readonly url: "https://brnkscan.bearnetwork.net";
            readonly apiUrl: "https://brnkscan.bearnetwork.net/api";
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
    id: 641230;
    name: "Bear Network Chain Mainnet";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "BearNetworkChain";
        readonly symbol: "BRNKC";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://brnkc-mainnet.bearnetwork.net"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=bearNetworkChainMainnet.d.ts.map