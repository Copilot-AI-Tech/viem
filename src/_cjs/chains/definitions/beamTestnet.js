"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beamTestnet = void 0;
const defineChain_js_1 = require("../../utils/chain/defineChain.js");
exports.beamTestnet = (0, defineChain_js_1.defineChain)({
    id: 13337,
    name: 'Beam Testnet',
    network: 'beam',
    nativeCurrency: {
        decimals: 18,
        name: 'Beam',
        symbol: 'BEAM',
    },
    rpcUrls: {
        public: {
            http: ['https://build.onbeam.com/rpc/testnet'],
            webSocket: ['wss://build.onbeam.com/ws/testnet'],
        },
        default: {
            http: ['https://build.onbeam.com/rpc/testnet'],
            webSocket: ['wss://build.onbeam.com/ws/testnet'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Beam Explorer',
            url: 'https://subnets-test.avax.network/beam',
        },
    },
    contracts: {
        multicall3: {
            address: '0x9bf49b704ee2a095b95c1f2d4eb9010510c41c9e',
            blockCreated: 3,
        },
    },
    testnet: true,
});
//# sourceMappingURL=beamTestnet.js.map