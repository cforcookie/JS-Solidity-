const contractAddress = "0x583031D1113aD414F02576BD6afaBfb302140225"
const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "admin_count",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "admin_status",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "anser",
                "type": "bool"
            }
        ],
        "name": "admins_vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "transact_id",
                "type": "uint256"
            }
        ],
        "name": "canel_transfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "categores",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "transact_id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "code_word",
                "type": "string"
            }
        ],
        "name": "confirm_transact",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "category",
                "type": "string"
            }
        ],
        "name": "create_category",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "taker",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "money",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "code_word",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "category",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "discripcion",
                "type": "string"
            }
        ],
        "name": "create_transact",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "sample",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "taker",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "code_word",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "discripcion",
                "type": "string"
            }
        ],
        "name": "create_transact_category",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "create_vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "password",
                "type": "string"
            }
        ],
        "name": "register_user",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "samples",
        "outputs": [
            {
                "internalType": "string",
                "name": "sample_category",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "money",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "transacts",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "transact_id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "giver",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "taker",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "money",
                "type": "uint256"
            },
            {
                "internalType": "bytes32",
                "name": "code_word",
                "type": "bytes32"
            },
            {
                "internalType": "string",
                "name": "category",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "discripcion",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "status",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "user",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "userlist",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "vote",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "admins_votes",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "admin_status",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "status_vote",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

let contractInterface, wed3, currentAccount, accs, balance, password;

let select = document.querySelector(".users");
let button = document.querySelector('.register')

window.onload = () => {
    bootsrapWeb3();

}

bootsrapWeb3 = () => {
    web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))
    contractInterface = new web3.eth.Contract(abi, contractAddress)
    refreshAccount();
    get_balance();
    selectOne();
    //do_register();

}

async function refreshAccount() {
    accs = await web3.eth.getAccounts();
    currentAccount = currentAccount || accs[0];
    acc = "Аккаунт: " + String(currentAccount);
    console.log(acc);
    document.querySelector(".user").textContent = acc;
   //  const user = document.querySelector('.user');
   //  user.textContent = currentAccount;
    if (accs.length === 0) {
        console.log("Аккаунтов нет");
    }
    console.log(accs);
}

async function selectOne() {
    accs = await web3.eth.getAccounts();
    select = document.querySelector(".users");
    accs.forEach((elem) => {
            let accountAddress = document.createElement('option');
            accountAddress.value = elem;
            accountAddress.textContent = elem;
            console.log(accountAddress.textContent);
            select.append(accountAddress);
        })

}

async function get_balance() {
    accs = await web3.eth.getAccounts();
    balance = await web3.eth.getBalance(currentAccount);
    let value = "Баланс: " + String(Number(balance/10**18)) + " eth";
    console.log(value);
    document.querySelector('.balance').textContent = value;

    select.addEventListener("change", () => {
        currentAccount = accs[select.selectedIndex];
        console.log(currentAccount);
        get_balance();
        refreshAccount();
    })
}

function do_register() {
    password = document.getElementById("password").value;
    console.log(password)
    // button = document.querySelector(".register");
    let result = contractInterface.methods.register_user(password).send({from:currentAccount});
    console.log(result);
}

button.onclick = do_register;
