const ChainlinkIntegratedFlashLoan = artifacts.require("ChainlinkIntegratedFlashLoan");

module.exports = function (deployer) {
  deployer.deploy(ChainlinkIntegratedFlashLoan);
};
