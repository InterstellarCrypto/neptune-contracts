require('dotenv').config()
var Web3 = require('web3');
const web=new Web3(new Web3.providers.HttpProvider(process.env.ROPSTEN_URL));
let accountList = null;
let firstAccount = null;

web
    .eth
    .getAccounts()
    .then(function(result){
        accountList = result;
        firstAccount = accountList[0];
    });

console.log(firstAccount);