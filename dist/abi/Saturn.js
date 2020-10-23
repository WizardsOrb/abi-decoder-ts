"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "orderId",
                "type": "uint256"
            },
            {
                "name": "token",
                "type": "address"
            },
            {
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "buyOrderWithERC20Token",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "name": "buyOrderWithEth",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "name": "cancelOrder",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "newMul",
                "type": "uint256"
            },
            {
                "name": "newDiv",
                "type": "uint256"
            }
        ],
        "name": "changeTradeMiningPrice",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "sellToken",
                "type": "address"
            },
            {
                "name": "buyToken",
                "type": "address"
            },
            {
                "name": "amount",
                "type": "uint256"
            },
            {
                "name": "priceMul",
                "type": "uint256"
            },
            {
                "name": "priceDiv",
                "type": "uint256"
            }
        ],
        "name": "sellERC20Token",
        "outputs": [
            {
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "sellToken",
                "type": "address"
            },
            {
                "name": "buyToken",
                "type": "address"
            },
            {
                "name": "amount",
                "type": "uint256"
            },
            {
                "name": "priceMul",
                "type": "uint256"
            },
            {
                "name": "priceDiv",
                "type": "uint256"
            },
            {
                "name": "ring",
                "type": "address"
            }
        ],
        "name": "sellERC20TokenWithRing",
        "outputs": [
            {
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "buyToken",
                "type": "address"
            },
            {
                "name": "priceMul",
                "type": "uint256"
            },
            {
                "name": "priceDiv",
                "type": "uint256"
            }
        ],
        "name": "sellEther",
        "outputs": [
            {
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "buyToken",
                "type": "address"
            },
            {
                "name": "priceMul",
                "type": "uint256"
            },
            {
                "name": "priceDiv",
                "type": "uint256"
            },
            {
                "name": "ring",
                "type": "address"
            }
        ],
        "name": "sellEtherWithRing",
        "outputs": [
            {
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "from",
                "type": "address"
            },
            {
                "name": "value",
                "type": "uint256"
            },
            {
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "tokenFallback",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "withdrawTradeMining",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_saturnToken",
                "type": "address"
            },
            {
                "name": "_treasury",
                "type": "address"
            },
            {
                "name": "_feeMul",
                "type": "uint256"
            },
            {
                "name": "_feeDiv",
                "type": "uint256"
            },
            {
                "name": "_tradeMiningMul",
                "type": "uint256"
            },
            {
                "name": "_tradeMiningDiv",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "sellToken",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "buyToken",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "ring",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "priceMul",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "priceDiv",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "time",
                "type": "uint256"
            }
        ],
        "name": "NewOrder",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "time",
                "type": "uint256"
            }
        ],
        "name": "OrderCancelled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "time",
                "type": "uint256"
            }
        ],
        "name": "OrderFulfilled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "orderId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "soldTokens",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "boughtTokens",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "feePaid",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "time",
                "type": "uint256"
            }
        ],
        "name": "Trade",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "trader",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "time",
                "type": "uint256"
            }
        ],
        "name": "Mined",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "amount",
                "type": "uint256"
            },
            {
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "name": "calcFees",
        "outputs": [
            {
                "name": "fees",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "feeDiv",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "feeMul",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
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
                "name": "token",
                "type": "address"
            },
            {
                "name": "user",
                "type": "address"
            }
        ],
        "name": "getBalance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
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
                "name": "desiredSellTokenAmount",
                "type": "uint256"
            },
            {
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "name": "getBuyTokenAmount",
        "outputs": [
            {
                "name": "amount",
                "type": "uint256"
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
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "name": "isOrderActive",
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
        "inputs": [],
        "name": "orderCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
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
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "name": "remainingAmount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
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
                "name": "fees",
                "type": "uint256"
            },
            {
                "name": "orderId",
                "type": "uint256"
            }
        ],
        "name": "tradeMiningAmount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "tradeMiningBalance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "tradeMiningDiv",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "tradeMiningMul",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "treasury",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];
