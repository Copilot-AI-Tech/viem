export declare const filecoin: {
    blockExplorers: {
        readonly default: {
            readonly name: "Filfox";
            readonly url: "https://filfox.info/en";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 3328594;
        };
    };
    id: 314;
    name: "Filecoin Mainnet";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "filecoin";
        readonly symbol: "FIL";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://api.node.glif.io/rpc/v1"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=filecoin.d.ts.map