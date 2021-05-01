var Web3 = require('web3');
const web=new Web3(new Web3.providers.HttpProvider("http://ropsten.infura.io/"));
let firstAccount = null;
web
    .eth
    .getAccounts()
    .then(function(result){
        firstAccount = result[0];
    });

console.log(firstAccount);