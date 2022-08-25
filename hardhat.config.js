/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-chai-matchers")
require("@nomiclabs/hardhat-ethers")
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: process.env.TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  }
};