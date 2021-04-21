const Migrations = artifacts.require("Migrations");
const NeptuneDeFiToken = artifacts.require("NeptuneDeFi");

module.exports = function (deployer) {
  deployer.deploy(NeptuneDeFiToken);
};
