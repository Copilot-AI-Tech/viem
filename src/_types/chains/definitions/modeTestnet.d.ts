export declare const modeTestnet: {
    blockExplorers: {
        readonly default: {
            readonly name: "Blockscout";
            readonly url: "https://sepolia.explorer.mode.network";
            readonly apiUrl: "https://sepolia.explorer.mode.network/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF";
            readonly blockCreated: 3019007;
        };
    };
    id: 919;
    name: "Mode Testnet";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://sepolia.mode.network"];
        };
    };
    sourceId: 11155111;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=modeTestnet.d.ts.map