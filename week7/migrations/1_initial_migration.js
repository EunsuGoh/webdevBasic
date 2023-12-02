const Migrations = artifacts.require('Migrations');
const Mytoken = artifacts.require('Mytoken');
module.exports = async function (deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(Mytoken, 'kwangwoon token', 'KWT');
};
