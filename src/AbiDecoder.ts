import BN from "bn.js"
import { AbiItem, sha3 } from "web3-utils"
import { abi } from "."
import {
  AbiState, Transaction, Log,
  DecodedLog, DecodedMethod, Param
} from "./types"

const abiCoder = require("web3-eth-abi")

export interface AbiDecoderTSOptions {
  [index: string]: any
  debug?: boolean
  loadDefaultAbis?: boolean
}

export default class AbiDecoderTS {

  public state: AbiState = {
    savedABIs: [],
    methodIDs: {},
    abiNames: {}
  }

  constructor(public options: AbiDecoderTSOptions = {}) {
    if (options.loadDefaultAbis) this._defaults()
  }

  public getABIs = (): AbiItem[] => {
    if (Object.keys(this.state.abiNames).length > 0) {
      let abis = []
      for (let abi in this.state.abiNames) {
        abis = abis.concat(this.getAbiByName(abi))
      }
      return abis
    }
    return this.state.savedABIs;
  }
  private _defaults = () => {
    this.addABI(abi.Erc20, "erc20")
    this.addABI(abi.Erc223, "erc223")
    this.addABI(abi.Erc721, "erc721")
    this.addABI(abi.Onex, "onex")
    this.addABI(abi.Saturn, "saturn")
  }
  private _typeToString = (input) => {
    if (input.type === "tuple") {
      return "(" + input.components.map(this._typeToString).join(",") + ")";
    }
    return input.type;
  }
  
  public addABI(abiArray: AbiItem[], abiName?: string, saveCache?: Function) {
    if (saveCache) saveCache(`ABIS:${abiName}`, abiArray, true)
    if (abiName) abiName = abiName.toLowerCase()
    if (Array.isArray(abiArray)) {
      // Iterate new abi to generate method id"s
      if (abiName && !this.state.abiNames[abiName]) this.state.abiNames[abiName] = []
      abiArray.map((abi) => {
        if (abi.name) {
          const signature = sha3(
            abi.name +
              "(" +
              abi.inputs
                .map(this._typeToString)
                .join(",") +
              ")"
          );
          if (abi.type === "event") {
            this.state.methodIDs[signature.slice(2)] = abi;
            if (abiName) this.state.abiNames[abiName].push(signature.slice(2))
          } else {
            this.state.methodIDs[signature.slice(2, 10)] = abi;
            if (abiName) this.state.abiNames[abiName].push(signature.slice(2, 10))
          }
        }
      });
  
      if (!abiName) this.state.savedABIs = this.state.savedABIs.concat(abiArray); 
    } else {
      throw new Error("Expected ABI array, got " + typeof abiArray);
    }
  }
  
  public removeABI(abiArray: AbiItem[]) {
    if (Array.isArray(abiArray)) {
      // Iterate new abi to generate method id"s
      abiArray.map((abi) => {
        if (abi.name) {
          const signature = sha3(
            abi.name +
              "(" +
              abi.inputs
                .map((input) => {
                  return input.type;
                })
                .join(",") +
              ")"
          );
          if (abi.type === "event") {
            if (this.state.methodIDs[signature.slice(2)]) {
              delete this.state.methodIDs[signature.slice(2)];
            }
          } else {
            if (this.state.methodIDs[signature.slice(2, 10)]) {
              delete this.state.methodIDs[signature.slice(2, 10)];
            }
          }
        }
      });
    } else {
      throw new Error("Expected ABI array, got " + typeof abiArray);
    }
  }
  
  public getMethodIDs(): { [index: string]: AbiItem } {
    return this.state.methodIDs;
  }

  public getSignatures(): string[] {
    return Object.keys(this.state.methodIDs);
  }
  
  public getAbiByName = (abiName: string) => {
    if (!this.state.abiNames) return false
    if (!this.state.abiNames[abiName]) return false
    return this.state.abiNames[abiName].map(methodId => {
      return this.state.methodIDs[methodId]
    })
  }
  
  public decodeTransaction(data: Transaction, logs: Log[]) {
    const _method = this.decodeMethod(data.input)
    const _logs = this.decodeLogs(logs)
    const out = {
      method: _method,
      events: _logs
    }
    return out
  }
  
  public decodeMethodDetailed(data: Transaction) {
    if (!data.input || data.input === "0x") return
    const _method = this.decodeMethod(data.input)
    const output = {
      block: data.blockNumber,
      hash: data.hash,
      transactionIndex: data.transactionIndex,
      ..._method
    }  
  
    return output
  }
  
  public decodeMethod(data: string): DecodedMethod {
    const methodID: string = data.slice(2, 10);
    const abiItem: AbiItem = this.state.methodIDs[methodID];
    try {
      if (abiItem) {
        let decoded = abiCoder.decodeParameters(abiItem.inputs, data.slice(10));
    
        let retData: DecodedMethod = {
          name: abiItem.name,
          methodID: `0x${methodID}`,
          params: [] as Param[],
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
              parsedParam = param.map(val => new BN(val).toString());
            } else {
              parsedParam = new BN(param).toString();
            }
          }
    
          // Addresses returned by web3 are randomly cased so we need to standardize and lowercase all
          if (isAddress) {
            const isArray = Array.isArray(param);
    
            if (isArray) {
              parsedParam = param.map(_ => _.toLowerCase());
            } else {
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
    }catch(e){
      if (this.options.debug) console.log(e)
    }
  }
  
  public decodeLogs(logs: Log[]): DecodedLog[] {
    try {
      return logs.filter(log => log.topics.length > 0).map((logItem) => {
        const methodID: string = logItem.topics[0].slice(2);
        const method: AbiItem = this.state.methodIDs[methodID];
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
    
          const decodedData = abiCoder.decodeParameters(
            dataTypes,
            logData.slice(2)
          );
    
          // Loop topic and data to get the params
          method.inputs.map((param) => {
            let decodedP: any = {
              name: param.name,
              type: param.type,
            };
    
            if (param.indexed) {
              decodedP.value = logItem.topics[topicsIndex];
              topicsIndex++;
            } else {
              decodedP.value = decodedData[dataIndex];
              dataIndex++;
            }
    
            if (param.type === "address") {
              decodedP.value = decodedP.value.toLowerCase();
              // 42 because len(0x) + 40
              if (decodedP.value.length > 42) {
                let toRemove = decodedP.value.length - 42;
                let temp = decodedP.value.split("");
                temp.splice(2, toRemove);
                decodedP.value = temp.join("");
              }
            }
    
            if (
              param.type === "uint256" ||
              param.type === "uint8" ||
              param.type === "int"
            ) {
              // ensure to remove leading 0x for hex numbers
              if (typeof decodedP.value === "string" && decodedP.value.startsWith("0x")) {
                decodedP.value = new BN(decodedP.value.slice(2), 16).toString(10);
              } else {
                decodedP.value = new BN(decodedP.value).toString(10);
              }
    
            }

            decodedParams.push(decodedP);
          });

          const logId = logItem.id || `log_${sha3(`${logItem.id}:${logItem.blockHash}:${methodID}`).substring(2, 10)}`

          return {
            block: logItem.blockNumber,
            hash: logItem.transactionHash,
            logIndex: logItem.logIndex,
            logId: logId,
            name: method.name,
            params: decodedParams,
            address: logItem.address,
            methodID: `0x${methodID}`
          }
        }
      });
    }catch(e) {
      if (this.options.debug) console.log(e)
      return []
    }
  }
}