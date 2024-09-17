const CrossChainFlashLoan = artifacts.require("CrossChainFlashLoan");

module.exports = function (deployer) {
  deployer.deploy(CrossChainFlashLoan);
};
