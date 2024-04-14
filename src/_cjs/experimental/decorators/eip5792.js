"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletActionsEip5792 = void 0;
const getCallsStatus_js_1 = require("../actions/getCallsStatus.js");
const getCapabilities_js_1 = require("../actions/getCapabilities.js");
const sendCalls_js_1 = require("../actions/sendCalls.js");
const showCallsStatus_js_1 = require("../actions/showCallsStatus.js");
const writeContracts_js_1 = require("../actions/writeContracts.js");
function walletActionsEip5792() {
    return (client) => {
        return {
            getCallsStatus: (parameters) => (0, getCallsStatus_js_1.getCallsStatus)(client, parameters),
            getCapabilities: ((parameters) => (0, getCapabilities_js_1.getCapabilities)(client, parameters)),
            sendCalls: (parameters) => (0, sendCalls_js_1.sendCalls)(client, parameters),
            showCallsStatus: (parameters) => (0, showCallsStatus_js_1.showCallsStatus)(client, parameters),
            writeContracts: (parameters) => (0, writeContracts_js_1.writeContracts)(client, parameters),
        };
    };
}
exports.walletActionsEip5792 = walletActionsEip5792;
//# sourceMappingURL=eip5792.js.map