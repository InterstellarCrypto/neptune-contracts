module.exports = function (deployer, network, accounts) {
  ["Migrations", "Address", "SafeMath", "NeptuneDeFi"].forEach(tokenName => {
    const token = artifacts.require(tokenName);
    deployer.deploy(token);
  });
};
