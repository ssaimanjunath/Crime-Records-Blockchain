var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Forensic = artifacts.require("./ForensicContract.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Forensic);
};