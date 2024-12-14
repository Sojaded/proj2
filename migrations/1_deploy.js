const Greeter = artifacts.require("Greeter");

module.exports = async function(deployer) {
    await deployer.deploy(Greeter, "Hello CNS 4206!");
};
