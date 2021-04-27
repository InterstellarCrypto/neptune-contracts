
// this block invokes `artifacts.require(file)` on each `file` in `./build/contracts` directory
module.exports = function (deployer, network, accounts) {
  const fs = require('fs');
  const contractsDirectory = "../build/contracts/";
  const neptuneDeFiTokenName = "NeptuneDeFi";
  const neptuneDeFiToken = artifacts.require(neptuneDeFiTokenName);
  fs.readdir(contractsDirectory, (err, files) => {
    files.forEach(file => {
      const tokenName = file.replaceAll(".json", "");
      if(tokenName != neptuneDeFiTokenName) {
        const token = artifacts.require(tokenName);
        deployer.deploy(token);
      }
  })});
  deployer.deploy(neptuneDeFiToken);
};