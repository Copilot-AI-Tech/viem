export declare const zetachainAthensTestnet: {
    blockExplorers: {
        readonly default: {
            readonly name: "ZetaScan";
            readonly url: "https://athens.explorer.zetachain.com";
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
    id: 7001;
    name: "ZetaChain Athens Testnet";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Zeta";
        readonly symbol: "aZETA";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=zetachainAthensTestnet.d.ts.map