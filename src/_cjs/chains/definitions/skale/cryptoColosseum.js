"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skaleCryptoColosseum = void 0;
const defineChain_js_1 = require("../../../utils/chain/defineChain.js");
exports.skaleCryptoColosseum = (0, defineChain_js_1.defineChain)({
    id: 2_046_399_126,
    name: 'SKALE | Crypto Colosseum',
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.skalenodes.com/v1/haunting-devoted-deneb'],
            webSocket: ['wss://mainnet.skalenodes.com/v1/ws/haunting-devoted-deneb'],
        },
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com',
        },
    },
    contracts: {},
});
//# sourceMappingURL=cryptoColosseum.js.map