require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const GOERLI = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: GOERLI,
      chainId: 5,
      accounts: [PRIVATE_KEY],
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
  },
  solidity: "0.8.20",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
