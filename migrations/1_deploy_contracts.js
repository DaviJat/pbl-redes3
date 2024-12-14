const Apostas = artifacts.require("Apostas");

module.exports = function(deployer) {
  deployer.deploy(Apostas);
};
