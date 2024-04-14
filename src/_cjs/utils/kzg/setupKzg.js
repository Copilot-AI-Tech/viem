"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupKzg = void 0;
const defineKzg_js_1 = require("./defineKzg.js");
function setupKzg(parameters, path) {
    try {
        parameters.loadTrustedSetup(path);
    }
    catch (e) {
        const error = e;
        if (!error.message.includes('trusted setup is already loaded'))
            throw error;
    }
    return (0, defineKzg_js_1.defineKzg)(parameters);
}
exports.setupKzg = setupKzg;
//# sourceMappingURL=setupKzg.js.map