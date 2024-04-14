export declare const sapphireTestnet: {
    blockExplorers: {
        readonly default: {
            readonly name: "Oasis Sapphire Testnet Explorer";
            readonly url: "https://testnet.explorer.sapphire.oasis.dev";
            readonly apiUrl: "https://testnet.explorer.sapphire.oasis.dev/api";
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
    id: 23295;
    name: "Oasis Sapphire Testnet";
    nativeCurrency: {
        readonly name: "Sapphire Test Rose";
        readonly symbol: "TEST";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://testnet.sapphire.oasis.dev"];
            readonly webSocket: readonly ["wss://testnet.sapphire.oasis.dev/ws"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
    readonly network: "sapphire-testnet";
};
//# sourceMappingURL=sapphireTestnet.d.ts.map