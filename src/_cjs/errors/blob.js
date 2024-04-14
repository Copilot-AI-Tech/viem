"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidVersionedHashVersionError = exports.InvalidVersionedHashSizeError = exports.EmptyBlobError = exports.BlobSizeTooLargeError = void 0;
const kzg_js_1 = require("../constants/kzg.js");
const base_js_1 = require("./base.js");
class BlobSizeTooLargeError extends base_js_1.BaseError {
    constructor({ maxSize, size }) {
        super('Blob size is too large.', {
            metaMessages: [`Max: ${maxSize} bytes`, `Given: ${size} bytes`],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BlobSizeTooLargeError'
        });
    }
}
exports.BlobSizeTooLargeError = BlobSizeTooLargeError;
class EmptyBlobError extends base_js_1.BaseError {
    constructor() {
        super('Blob data must not be empty.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'EmptyBlobError'
        });
    }
}
exports.EmptyBlobError = EmptyBlobError;
class InvalidVersionedHashSizeError extends base_js_1.BaseError {
    constructor({ hash, size, }) {
        super(`Versioned hash "${hash}" size is invalid.`, {
            metaMessages: ['Expected: 32', `Received: ${size}`],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidVersionedHashSizeError'
        });
    }
}
exports.InvalidVersionedHashSizeError = InvalidVersionedHashSizeError;
class InvalidVersionedHashVersionError extends base_js_1.BaseError {
    constructor({ hash, version, }) {
        super(`Versioned hash "${hash}" version is invalid.`, {
            metaMessages: [
                `Expected: ${kzg_js_1.versionedHashVersionKzg}`,
                `Received: ${version}`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidVersionedHashVersionError'
        });
    }
}
exports.InvalidVersionedHashVersionError = InvalidVersionedHashVersionError;
//# sourceMappingURL=blob.js.map