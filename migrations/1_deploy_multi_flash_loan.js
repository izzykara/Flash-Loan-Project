const MultiSourceFlashLoan = artifacts.require("MultiSourceFlashLoan");

module.exports = function (deployer) {
  deployer.deploy(MultiSourceFlashLoan);
};
