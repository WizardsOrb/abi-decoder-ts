"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const test_constants_1 = require("./test.constants");
const decoder = new _1.default();
decoder.addABI(test_constants_1.Erc721Basic, "erc721");
console.log(decoder.state.abiNames);
console.log(decoder.getAbiByName("erc721"));
console.log(decoder.getABIs());
const decodedLog = decoder.decodeLogs(test_constants_1.logs);
const decodedMethod = decoder.decodeMethod(test_constants_1.tx.input);
console.log({ decodedLog, decodedMethod });
