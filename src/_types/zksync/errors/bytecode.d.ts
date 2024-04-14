import { BaseError } from '../../errors/base.js';
export type BytecodeLengthExceedsMaxSizeErrorType = BytecodeLengthExceedsMaxSizeError & {
    name: 'BytecodeLengthExceedsMaxSizeError';
};
export declare class BytecodeLengthExceedsMaxSizeError extends BaseError {
    name: string;
    constructor({ givenLength, maxBytecodeSize, }: {
        givenLength: number;
        maxBytecodeSize: bigint;
    });
}
export type BytecodeLengthInWordsMustBeOddErrorType = BytecodeLengthInWordsMustBeOddError & {
    name: 'BytecodeLengthInWordsMustBeOddError';
};
export declare class BytecodeLengthInWordsMustBeOddError extends BaseError {
    name: string;
    constructor({ givenLengthInWords }: {
        givenLengthInWords: number;
    });
}
export type BytecodeLengthMustBeDivisibleBy32ErrorType = BytecodeLengthMustBeDivisibleBy32Error & {
    name: 'BytecodeLengthMustBeDivisibleBy32Error';
};
export declare class BytecodeLengthMustBeDivisibleBy32Error extends BaseError {
    name: string;
    constructor({ givenLength }: {
        givenLength: number;
    });
}
//# sourceMappingURL=bytecode.d.ts.map