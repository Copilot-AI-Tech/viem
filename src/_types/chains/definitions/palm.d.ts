export declare const palm: {
    blockExplorers: {
        readonly default: {
            readonly name: "Chainlens";
            readonly url: "https://palm.chainlens.com";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 15429248;
        };
    };
    id: 11297108109;
    name: "Palm";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "PALM";
        readonly symbol: "PALM";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://palm-mainnet.public.blastapi.io"];
            readonly webSocket: readonly ["wss://palm-mainnet.public.blastapi.io"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=palm.d.ts.map