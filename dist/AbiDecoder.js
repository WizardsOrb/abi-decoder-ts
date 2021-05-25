"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bn_js_1 = __importDefault(require("bn.js"));
const web3_utils_1 = require("web3-utils");
const _1 = require(".");
const abiCoder = require("web3-eth-abi");
class AbiDecoderTS {
    constructor(options = {}) {
        this.options = options;
        this.state = {
            savedABIs: [],
            methodIDs: {},
            abiNames: {}
        };
        this.getABIs = () => {
            if (Object.keys(this.state.abiNames).length > 0) {
                let abis = [];
                for (let abi in this.state.abiNames) {
                    abis = abis.concat(this.getAbiByName(abi));
                }
                return abis;
            }
            return this.state.savedABIs;
        };
        this._defaults = () => {
            this.addABI(_1.abi.Erc20, "erc20");
            this.addABI(_1.abi.Erc223, "erc223");
            this.addABI(_1.abi.Erc721, "erc721");
            this.addABI(_1.abi.Onex, "onex");
            this.addABI(_1.abi.Saturn, "saturn");
        };
        this._typeToString = (input) => {
            if (input.type === "tuple") {
                return "(" + input.components.map(this._typeToString).join(",") + ")";
            }
            return input.type;
        };
        this.getAbiByName = (abiName) => {
            if (!this.state.abiNames)
                return false;
            if (!this.state.abiNames[abiName])
                return false;
            return this.state.abiNames[abiName].map(methodId => {
                return this.state.methodIDs[methodId];
            });
        };
        if (options.loadDefaultAbis)
            this._defaults();
    }
    addABI(abiArray, abiName, saveCache) {
        if (saveCache)
            saveCache(`ABIS:${abiName}`, abiArray, true);
        if (abiName)
            abiName = abiName.toLowerCase();
        if (Array.isArray(abiArray)) {
            if (abiName && !this.state.abiNames[abiName])
                this.state.abiNames[abiName] = [];
            abiArray.map((abi) => {
                if (abi.name) {
                    const signature = web3_utils_1.sha3(abi.name +
                        "(" +
                        abi.inputs
                            .map(this._typeToString)
                            .join(",") +
                        ")");
                    if (abi.type === "event") {
                        this.state.methodIDs[signature.slice(2)] = abi;
                        if (abiName)
                            this.state.abiNames[abiName].push(signature.slice(2));
                    }
                    else {
                        this.state.methodIDs[signature.slice(2, 10)] = abi;
                        if (abiName)
                            this.state.abiNames[abiName].push(signature.slice(2, 10));
                    }
                }
            });
            if (!abiName)
                this.state.savedABIs = this.state.savedABIs.concat(abiArray);
        }
        else {
            throw new Error("Expected ABI array, got " + typeof abiArray);
        }
    }
    removeABI(abiArray) {
        if (Array.isArray(abiArray)) {
            abiArray.map((abi) => {
                if (abi.name) {
                    const signature = web3_utils_1.sha3(abi.name +
                        "(" +
                        abi.inputs
                            .map((input) => {
                            return input.type;
                        })
                            .join(",") +
                        ")");
                    if (abi.type === "event") {
                        if (this.state.methodIDs[signature.slice(2)]) {
                            delete this.state.methodIDs[signature.slice(2)];
                        }
                    }
                    else {
                        if (this.state.methodIDs[signature.slice(2, 10)]) {
                            delete this.state.methodIDs[signature.slice(2, 10)];
                        }
                    }
                }
            });
        }
        else {
            throw new Error("Expected ABI array, got " + typeof abiArray);
        }
    }
    getMethodIDs() {
        return this.state.methodIDs;
    }
    getSignatures() {
        return Object.keys(this.state.methodIDs);
    }
    decodeTransaction(data, logs) {
        const _method = this.decodeMethod(data.input);
        const _logs = this.decodeLogs(logs);
        const out = {
            method: _method,
            events: _logs
        };
        return out;
    }
    decodeMethodDetailed(data) {
        if (!data.input || data.input === "0x")
            return;
        const _method = this.decodeMethod(data.input);
        const output = {
            block: data.blockNumber,
            hash: data.hash,
            transactionIndex: data.transactionIndex,
            ..._method
        };
        return output;
    }
    decodeMethod(data) {
        const methodID = data.slice(2, 10);
        const abiItem = this.state.methodIDs[methodID];
        try {
            if (abiItem) {
                let decoded = abiCoder.decodeParameters(abiItem.inputs, data.slice(10));
                let retData = {
                    name: abiItem.name,
                    methodID: `0x${methodID}`,
                    params: [],
                };
                for (let i = 0; i < decoded.__length__; i++) {
                    let param = decoded[i];
                    let parsedParam = param;
                    const isUint = abiItem.inputs[i].type.indexOf("uint") === 0;
                    const isInt = abiItem.inputs[i].type.indexOf("int") === 0;
                    const isAddress = abiItem.inputs[i].type.indexOf("address") === 0;
                    if (isUint || isInt) {
                        const isArray = Array.isArray(param);
                        if (isArray) {
                            parsedParam = param.map(val => new bn_js_1.default(val).toString());
                        }
                        else {
                            parsedParam = new bn_js_1.default(param).toString();
                        }
                    }
                    if (isAddress) {
                        const isArray = Array.isArray(param);
                        if (isArray) {
                            parsedParam = param.map(_ => _.toLowerCase());
                        }
                        else {
                            parsedParam = param.toLowerCase();
                        }
                    }
                    retData.params.push({
                        name: abiItem.inputs[i].name,
                        value: parsedParam,
                        type: abiItem.inputs[i].type,
                    });
                }
                return retData;
            }
        }
        catch (e) {
            if (this.options.debug)
                console.log(e);
        }
    }
    decodeLogs(logs) {
        try {
            return logs.filter(log => log.topics.length > 0).map((logItem) => {
                const methodID = logItem.topics[0].slice(2);
                const method = this.state.methodIDs[methodID];
                if (method) {
                    const logData = logItem.data;
                    let decodedParams = [];
                    let dataIndex = 0;
                    let topicsIndex = 1;
                    let dataTypes = [];
                    method.inputs.map((input) => {
                        if (!input.indexed) {
                            dataTypes.push(input.type);
                        }
                    });
                    const decodedData = abiCoder.decodeParameters(dataTypes, logData.slice(2));
                    method.inputs.map((param) => {
                        let decodedP = {
                            name: param.name,
                            type: param.type,
                        };
                        if (param.indexed) {
                            decodedP.value = logItem.topics[topicsIndex];
                            topicsIndex++;
                        }
                        else {
                            decodedP.value = decodedData[dataIndex];
                            dataIndex++;
                        }
                        if (param.type === "address") {
                            decodedP.value = decodedP.value.toLowerCase();
                            if (decodedP.value.length > 42) {
                                let toRemove = decodedP.value.length - 42;
                                let temp = decodedP.value.split("");
                                temp.splice(2, toRemove);
                                decodedP.value = temp.join("");
                            }
                        }
                        if (param.type === "uint256" ||
                            param.type === "uint8" ||
                            param.type === "int") {
                            if (typeof decodedP.value === "string" && decodedP.value.startsWith("0x")) {
                                decodedP.value = new bn_js_1.default(decodedP.value.slice(2), 16).toString(10);
                            }
                            else {
                                decodedP.value = new bn_js_1.default(decodedP.value).toString(10);
                            }
                        }
                        decodedParams.push(decodedP);
                    });
                    const logId = logItem.id || `log_${web3_utils_1.sha3(`${logItem.id}:${logItem.blockHash}:${methodID}`).substring(2, 10)}`;
                    return {
                        block: logItem.blockNumber,
                        hash: logItem.transactionHash,
                        logIndex: logItem.logIndex,
                        logId: logId,
                        name: method.name,
                        params: decodedParams,
                        address: logItem.address,
                        methodID: `0x${methodID}`
                    };
                }
            });
        }
        catch (e) {
            if (this.options.debug)
                console.log(e);
            return [];
        }
    }
}
exports.default = AbiDecoderTS;
