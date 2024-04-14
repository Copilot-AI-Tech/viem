export declare const sapphire: {
    blockExplorers: {
        readonly default: {
            readonly name: "Oasis Sapphire Explorer";
            readonly url: "https://explorer.sapphire.oasis.io";
            readonly apiUrl: "https://explorer.sapphire.oasis.io/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 734531;
        };
    };
    id: 23294;
    name: "Oasis Sapphire";
    nativeCurrency: {
        readonly name: "Sapphire Rose";
        readonly symbol: "ROSE";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://sapphire.oasis.io"];
            readonly webSocket: readonly ["wss://sapphire.oasis.io/ws"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
    readonly network: "sapphire";
};
//# sourceMappingURL=sapphire.d.ts.map