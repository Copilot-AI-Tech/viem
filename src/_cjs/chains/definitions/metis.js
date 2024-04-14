"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metis = void 0;
const defineChain_js_1 = require("../../utils/chain/defineChain.js");
exports.metis = (0, defineChain_js_1.defineChain)({
    id: 1_088,
    name: 'Metis',
    nativeCurrency: {
        decimals: 18,
        name: 'Metis',
        symbol: 'METIS',
    },
    rpcUrls: {
        default: { http: ['https://andromeda.metis.io/?owner=1088'] },
    },
    blockExplorers: {
        default: {
            name: 'Andromeda Explorer',
            url: 'https://andromeda-explorer.metis.io',
            apiUrl: 'https://andromeda-explorer.metis.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 2338552,
        },
    },
});
//# sourceMappingURL=metis.js.map