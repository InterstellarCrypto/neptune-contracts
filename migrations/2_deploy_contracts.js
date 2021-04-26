
// this block invokes `artifacts.require(file)` on each `file` in `./build/contracts` directory
const contractsDirectory = "../build/contracts/";
const fs = require('fs');
fs.readdir(contractsDirectory, (err, files) => {
  files.forEach(file => {
    artifacts.require(file)
})});

module.exports = function (deployer, network, accounts) {
  
  deployer.deploy(NeptuneDeFiToken);
};
