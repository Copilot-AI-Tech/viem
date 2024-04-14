"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTransaction = void 0;
const parseAccount_js_1 = require("../../accounts/utils/parseAccount.js");
const account_js_1 = require("../../errors/account.js");
const assertCurrentChain_js_1 = require("../../utils/chain/assertCurrentChain.js");
const getTransactionError_js_1 = require("../../utils/errors/getTransactionError.js");
const extract_js_1 = require("../../utils/formatters/extract.js");
const transactionRequest_js_1 = require("../../utils/formatters/transactionRequest.js");
const getAction_js_1 = require("../../utils/getAction.js");
const assertRequest_js_1 = require("../../utils/transaction/assertRequest.js");
const getChainId_js_1 = require("../public/getChainId.js");
const prepareTransactionRequest_js_1 = require("./prepareTransactionRequest.js");
const sendRawTransaction_js_1 = require("./sendRawTransaction.js");
async function sendTransaction(client, parameters) {
    const { account: account_ = client.account, chain = client.chain, accessList, blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, ...rest } = parameters;
    if (!account_)
        throw new account_js_1.AccountNotFoundError({
            docsPath: '/docs/actions/wallet/sendTransaction',
        });
    const account = (0, parseAccount_js_1.parseAccount)(account_);
    try {
        (0, assertRequest_js_1.assertRequest)(parameters);
        let chainId;
        if (chain !== null) {
            chainId = await (0, getAction_js_1.getAction)(client, getChainId_js_1.getChainId, 'getChainId')({});
            (0, assertCurrentChain_js_1.assertCurrentChain)({
                currentChainId: chainId,
                chain,
            });
        }
        if (account.type === 'local') {
            const request = await (0, getAction_js_1.getAction)(client, prepareTransactionRequest_js_1.prepareTransactionRequest, 'prepareTransactionRequest')({
                account,
                accessList,
                blobs,
                chain,
                chainId,
                data,
                gas,
                gasPrice,
                maxFeePerBlobGas,
                maxFeePerGas,
                maxPriorityFeePerGas,
                nonce,
                parameters: [...prepareTransactionRequest_js_1.defaultParameters, 'sidecars'],
                to,
                value,
                ...rest,
            });
            const serializer = chain?.serializers?.transaction;
            const serializedTransaction = (await account.signTransaction(request, {
                serializer,
            }));
            return await (0, getAction_js_1.getAction)(client, sendRawTransaction_js_1.sendRawTransaction, 'sendRawTransaction')({
                serializedTransaction,
            });
        }
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || transactionRequest_js_1.formatTransactionRequest;
        const request = format({
            ...(0, extract_js_1.extract)(rest, { format: chainFormat }),
            accessList,
            blobs,
            data,
            from: account.address,
            gas,
            gasPrice,
            maxFeePerBlobGas,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to,
            value,
        });
        return await client.request({
            method: 'eth_sendTransaction',
            params: [request],
        }, { retryCount: 0 });
    }
    catch (err) {
        throw (0, getTransactionError_js_1.getTransactionError)(err, {
            ...parameters,
            account,
            chain: parameters.chain || undefined,
        });
    }
}
exports.sendTransaction = sendTransaction;
//# sourceMappingURL=sendTransaction.js.map