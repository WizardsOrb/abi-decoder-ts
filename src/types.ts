import { AbiItem } from "web3-utils"

export type AbiState = {
  savedABIs: AbiItem[]
  methodIDs: {
    [index: string]: AbiItem
  }
  abiNames?: {
    erc20?: string[]
    erc223?: string[]
    erc721?: string[]
    onex?: string[]
    saturn?: string[]
    [index: string]: string[]
  }
}

export interface Transaction {
  hash: string;
  nonce: number;
  blockHash: string | null;
  blockNumber: number | null;
  transactionIndex: number | null;
  from: string;
  to: string | null;
  value: string;
  gasPrice: string;
  gas: number;
  input: string;

  chainId?: string
  condition?: any
  creates?: string | null
  publicKey?: string
  r?: string
  raw?: string
  s?: string
  standardV?: string
  v?: string
}

export interface Log {
  address: string;
  data: string;
  topics: string[];
  logIndex: number;
  transactionIndex: number;
  transactionHash: string;
  blockHash: string;
  blockNumber: number;
  removed?: boolean
  transactionLogIndex?: string | number
  type?: string
  id: string
}

export interface Param {
  name: string
  type: string
  value: string
}

export interface DecodedLog {
  block: number
  hash: string
  logIndex: number
  logId: string | undefined
  address: string,
  name: string,
  params: Param[],
  methodID: string
}

export interface DecodedMethod {
    name: string;
    methodID: string;
    params: Param[];
}