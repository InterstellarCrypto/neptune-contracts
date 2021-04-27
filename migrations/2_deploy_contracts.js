
// this block invokes `artifacts.require(file)` on each `file` in `./build/contracts` directory
module.exports = function (deployer, network, accounts) {
  const contractsDirectory = "../build/contracts/";
  const fs = require('fs');
  fs.readdir(contractsDirectory, (err, files) => {
    files.forEach(file => {
      const token = artifacts.require(file.replaceAll(".json", ""))
      deployer.deploy(token)
  })});

  deployer.deploy(token);
};
