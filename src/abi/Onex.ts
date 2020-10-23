import { AbiItem } from "web3-utils"

export default [{
  "type": "function",
  "stateMutability": "view",
  "payable": false,
  "outputs": [{
    "type": "string",
    "name": "_name"
  }],
  "name": "name",
  "inputs": [],
  "constant": true
}, {
  "type": "function",
  "stateMutability": "nonpayable",
  "payable": false,
  "outputs": [{
    "type": "bool",
    "name": ""
  }],
  "name": "mint",
  "inputs": [],
  "constant": false
}, {
  "type": "function",
  "stateMutability": "view",
  "payable": false,
  "outputs": [{
    "type": "uint256",
    "name": "_totalSupply"
  }],
  "name": "totalSupply",
  "inputs": [],
  "constant": true
}, {
  "type": "function",
  "stateMutability": "view",
  "payable": false,
  "outputs": [{
    "type": "uint256",
    "name": ""
  }],
  "name": "maxTotalSupply",
  "inputs": [],
  "constant": true
}, {
  "type": "function",
  "stateMutability": "view",
  "payable": false,
  "outputs": [{
    "type": "uint8",
    "name": "_decimals"
  }],
  "name": "decimals",
  "inputs": [],
  "constant": true
}, {
  "type": "function",
  "stateMutability": "view",
  "payable": false,
  "outputs": [{
    "type": "uint256",
    "name": "blockNumber"
  }],
  "name": "getBlockNumber",
  "inputs": [],
  "constant": true
}, {
  "type": "function",
  "stateMutability": "view",
  "payable": false,
  "outputs": [{
    "type": "uint256",
    "name": ""
  }],
  "name": "chainStartTime",
  "inputs": [],
  "constant": true
}, {
  "type": "function",
  "stateMutability": "view",
  "payable": false,
  "outputs": [{
    "type": "uint256",
    "name": "balance"
  }],
  "name": "balanceOf",
  "inputs": [{
    "type": "address",
    "name": "_owner"
  }],
  "constant": true
}, {
  "type": "function",
  "stateMutability": "view",
  "payable": false,
  "outputs": [{
    "type": "uint256",
    "name": ""
  }],
  "name": "stakeStartTime",
  "inputs": [],
  "constant": true
}, {
  "type": "function",
  "stateMutability": "view",
  "payable": false,
  "outputs": [{
    "type": "string",
    "name": "_symbol"
  }],
  "name": "symbol",
  "inputs": [],
  "constant": true
}, {
  "type": "function",
  "stateMutability": "view",
  "payable": false,
  "outputs": [{
    "type": "uint256",
    "name": ""
  }],
  "name": "totalInitialSupply",
  "inputs": [],
  "constant": true
}, {
  "type": "function",
  "stateMutability": "view",
  "payable": false,
  "outputs": [{
    "type": "uint256",
    "name": ""
  }],
  "name": "coinAge",
  "inputs": [{
    "type": "address",
    "name": "staker"
  }],
  "constant": true
}, {
  "type": "function",
  "stateMutability": "view",
  "payable": false,
  "outputs": [{
    "type": "uint256",
    "name": "interest"
  }],
  "name": "annualInterest",
  "inputs": [],
  "constant": true
}, {
  "type": "function",
  "stateMutability": "nonpayable",
  "payable": false,
  "outputs": [{
    "type": "bool",
    "name": "success"
  }],
  "name": "transfer",
  "inputs": [{
    "type": "address",
    "name": "_to"
  }, {
    "type": "uint256",
    "name": "_value"
  }, {
    "type": "bytes",
    "name": "_data"
  }],
  "constant": false
}, {
  "type": "function",
  "stateMutability": "view",
  "payable": false,
  "outputs": [{
    "type": "uint256",
    "name": ""
  }],
  "name": "stakeMinAge",
  "inputs": [],
  "constant": true
}, {
  "type": "function",
  "stateMutability": "view",
  "payable": false,
  "outputs": [{
    "type": "uint256",
    "name": ""
  }],
  "name": "chainStartBlockNumber",
  "inputs": [],
  "constant": true
}, {
  "type": "function",
  "stateMutability": "view",
  "payable": false,
  "outputs": [{
    "type": "uint256",
    "name": ""
  }],
  "name": "stakeMaxAge",
  "inputs": [],
  "constant": true
}, {
  "type": "function",
  "stateMutability": "view",
  "payable": false,
  "outputs": [{
    "type": "uint256",
    "name": ""
  }],
  "name": "maxMintProofOfStake",
  "inputs": [],
  "constant": true
}, {
  "type": "constructor",
  "stateMutability": "nonpayable",
  "payable": false,
  "inputs": []
}, {
  "type": "event",
  "name": "Mint",
  "inputs": [{
    "type": "address",
    "name": "_address",
    "indexed": true
  }, {
    "type": "uint256",
    "name": "_reward",
    "indexed": false
  }],
  "anonymous": false
}, {
  "type": "event",
  "name": "Transfer",
  "inputs": [{
    "type": "address",
    "name": "_from",
    "indexed": true
  }, {
    "type": "address",
    "name": "_to",
    "indexed": true
  }, {
    "type": "uint256",
    "name": "_value",
    "indexed": false
  }],
  "anonymous": false
}, {
  "type": "event",
  "name": "ERC223Transfer",
  "inputs": [{
    "type": "address",
    "name": "_from",
    "indexed": true
  }, {
    "type": "address",
    "name": "_to",
    "indexed": true
  }, {
    "type": "uint256",
    "name": "_value",
    "indexed": false
  }, {
    "type": "bytes",
    "name": "_data",
    "indexed": false
  }],
  "anonymous": false
}] as AbiItem[]