import { AbiItem } from "web3-utils";
import { AbiState, Transaction, Log, DecodedLog, DecodedMethod, Param } from "./types";
export interface AbiDecoderTSOptions {
    [index: string]: any;
    debug?: boolean;
    loadDefaultAbis?: boolean;
}
export default class AbiDecoderTS {
    options: AbiDecoderTSOptions;
    state: AbiState;
    constructor(options?: AbiDecoderTSOptions);
    getABIs: () => AbiItem[];
    private _defaults;
    private _typeToString;
    addABI(abiArray: AbiItem[], abiName?: string, saveCache?: Function): void;
    removeABI(abiArray: AbiItem[]): void;
    getMethodIDs(): {
        [index: string]: AbiItem;
    };
    getSignatures(): string[];
    getAbiByName: (abiName: string) => false | AbiItem[];
    decodeTransaction(data: Transaction, logs: Log[]): {
        method: DecodedMethod;
        events: DecodedLog[];
    };
    decodeMethodDetailed(data: Transaction): {
        name: string;
        methodID: string;
        params: Param[];
        block: number;
        hash: string;
        transactionIndex: number;
    };
    decodeMethod(data: string): DecodedMethod;
    decodeLogs(logs: Log[]): DecodedLog[];
}
