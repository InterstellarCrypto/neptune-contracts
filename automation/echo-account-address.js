var Web3 = require('web3');
const ropstenUrl = provess.env.ROPSTEN_URL;
const web=new Web3(new Web3.providers.HttpProvider(ropstenUrl));
let firstAccount = null;
let ethereumBlockCahin = web.eth
let getAccountsPromise = ethereumBlockCahin.getAccounts();
console.log("getAccountsPromise =" + getAccountsPromise);

web
    .eth
    .getAccounts((error, accounts) => { 
        firstAccount = accounts[0]; 
        console.log("inner firstAccount = " + firstAccount);
        console.log("inner accounts = " + accounts);
        console.log("inner error = " + error);
    });

console.log("First Account = " + firstAccount);

