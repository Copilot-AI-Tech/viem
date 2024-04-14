export declare const confluxESpaceTestnet: {
    blockExplorers: {
        readonly default: {
            readonly name: "ConfluxScan";
            readonly url: "https://evmtestnet.confluxscan.io";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xEFf0078910f638cd81996cc117bccD3eDf2B072F";
            readonly blockCreated: 117499050;
        };
    };
    id: 71;
    name: "Conflux eSpace Testnet";
    nativeCurrency: {
        readonly name: "Conflux";
        readonly symbol: "CFX";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://evmtestnet.confluxrpc.org"];
            readonly webSocket: readonly ["wss://evmtestnet.confluxrpc.org/ws"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
    readonly network: "cfx-espace-testnet";
};
//# sourceMappingURL=confluxESpaceTestnet.d.ts.map