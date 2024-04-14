"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x1Testnet = void 0;
const defineChain_js_1 = require("../../utils/chain/defineChain.js");
exports.x1Testnet = (0, defineChain_js_1.defineChain)({
    id: 195,
    name: 'X1 Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'OKB',
        symbol: 'OKB',
    },
    rpcUrls: {
        default: { http: ['https://x1testrpc.okx.com'] },
    },
    blockExplorers: {
        default: {
            name: 'OKLink',
            url: 'https://www.oklink.com/x1-test',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 624344,
        },
    },
    testnet: true,
});
//# sourceMappingURL=x1Testnet.js.map