const FullFlashLoanStrategy = artifacts.require("FullFlashLoanStrategy");

module.exports = function (deployer) {
  deployer.deploy(FullFlashLoanStrategy);
};
