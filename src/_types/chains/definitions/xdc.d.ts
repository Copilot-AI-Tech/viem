export declare const xdc: {
    blockExplorers: {
        readonly xinfin: {
            readonly name: "XinFin";
            readonly url: "https://explorer.xinfin.network";
        };
        readonly default: {
            readonly name: "Blocksscan";
            readonly url: "https://xdc.blocksscan.io";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 71542788;
        };
    };
    id: 50;
    name: "XinFin Network";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "XDC";
        readonly symbol: "XDC";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.xinfin.network"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=xdc.d.ts.map