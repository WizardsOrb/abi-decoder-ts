"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tx = exports.logs = exports.Erc721Basic = void 0;
exports.Erc721Basic = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "_interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "name": "_operator",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "exists",
        "outputs": [
            {
                "name": "_exists",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "_balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_operator",
                "type": "address"
            },
            {
                "name": "_approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_approved",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_operator",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    }
];
exports.logs = [
    {
        "address": "0x9935caB0d263c2568bd31659C81D6ecE86b793e4",
        "blockHash": "0x64ae4233b937a357b32b839811aeaded2391b8f1d3e249241f0c414342a0357a",
        "blockNumber": 163237,
        "data": "0x",
        "logIndex": 0,
        "removed": false,
        "topics": [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x000000000000000000000000bf0c820f4b27e00c6b606215906bc344c2c1f52e",
            "0x0000000000000000000000003518400bf88e8e252021cbc98c059dc3b9cc1cc6",
            "0x0000000000000000000000000000000000000000000000000000000000000001"
        ],
        "transactionHash": "0x98f74eb8af822f6cc7c80702b6d4a1568ad55fc1c049aa8f00856cdb50780c13",
        "transactionIndex": 0,
        "transactionLogIndex": "0x0",
        "type": "mined",
        "id": "log_7c1623c0"
    }
];
exports.tx = {
    "blockHash": "0x64ae4233b937a357b32b839811aeaded2391b8f1d3e249241f0c414342a0357a",
    "blockNumber": 163237,
    "chainId": "0x123d",
    "condition": null,
    "creates": null,
    "from": "0xbf0C820f4b27e00c6b606215906Bc344C2C1F52e",
    "gas": 169596,
    "gasPrice": "1100000000",
    "hash": "0x98f74eb8af822f6cc7c80702b6d4a1568ad55fc1c049aa8f00856cdb50780c13",
    "input": "0x23b872dd000000000000000000000000bf0c820f4b27e00c6b606215906bc344c2c1f52e0000000000000000000000003518400bf88e8e252021cbc98c059dc3b9cc1cc60000000000000000000000000000000000000000000000000000000000000001",
    "nonce": 81,
    "publicKey": "0xcd10e178e27feea227ac4bb4b2940cd19685f4f9c3f8d0342d378fbc12ec4eabe2e791be295ddc12537d5f2e95ae6fbc134386d85fbd9fcfda48bc545e8b1f86",
    "r": "0x6ac55ac114abf0e11a0d5f68497a9f95f8836dbb2a2bcb8e04aa6dcc1a5cffae",
    "raw": "0xf8cb51844190ab008302967c949935cab0d263c2568bd31659c81d6ece86b793e480b86423b872dd000000000000000000000000bf0c820f4b27e00c6b606215906bc344c2c1f52e0000000000000000000000003518400bf88e8e252021cbc98c059dc3b9cc1cc6000000000000000000000000000000000000000000000000000000000000000182249da06ac55ac114abf0e11a0d5f68497a9f95f8836dbb2a2bcb8e04aa6dcc1a5cffaea041ef3cbced62d6322e4292a682af50f028219e476a11d33eb3c0a0d96fd9c2e4",
    "s": "0x41ef3cbced62d6322e4292a682af50f028219e476a11d33eb3c0a0d96fd9c2e4",
    "standardV": "0x0",
    "to": "0x9935caB0d263c2568bd31659C81D6ecE86b793e4",
    "transactionIndex": 0,
    "v": "0x249d",
    "value": "0"
};
