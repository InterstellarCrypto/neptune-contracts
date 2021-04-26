const Migrations = artifacts.require("Migrations");
const 
const NeptuneDeFiToken = artifacts.require("NeptuneDeFi");

module.exports = function (deployer, network, accounts) {
    
  deployer.deploy(NeptuneDeFiToken);
};
