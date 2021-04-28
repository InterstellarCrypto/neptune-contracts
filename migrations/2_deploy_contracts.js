module.exports = function (deployer, network, accounts) {
  ["Address", "SafeMath", "NeptuneDeFi"].forEach(tokenName => {
    const token = artifacts.require(tokenName);
    deployer.deploy(token);
  });
};
