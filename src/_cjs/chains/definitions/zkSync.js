"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zkSync = void 0;
const defineChain_js_1 = require("../../utils/chain/defineChain.js");
const chainConfig_js_1 = require("../../zksync/chainConfig.js");
exports.zkSync = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 324,
    name: 'zkSync Era',
    network: 'zksync-era',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://mainnet.era.zksync.io'],
            webSocket: ['wss://mainnet.era.zksync.io/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://era.zksync.network/',
            apiUrl: 'https://api-era.zksync.network/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xF9cda624FBC7e059355ce98a31693d299FACd963',
        },
    },
});
//# sourceMappingURL=zkSync.js.map