import AbiDecoder from "."
import { Erc721Basic, logs, tx } from "./test.constants"

const decoder = new AbiDecoder()
decoder.addABI(Erc721Basic, "erc721")
console.log(decoder.state.abiNames)
console.log(decoder.getAbiByName("erc721"))
console.log(decoder.getABIs())

const decodedLog = decoder.decodeLogs(logs)
const decodedMethod = decoder.decodeMethod(tx.input)
console.log({ decodedLog, decodedMethod })