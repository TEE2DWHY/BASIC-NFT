const { ethers, network } = require("hardhat");
require("dotenv").config();
const verifyContract = require("../utils/verify");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const main = async () => {
  try {
    const nftContractFactory = await ethers.getContractFactory("DogNft");
    console.log("contract is being deployed....");
    const nft = await nftContractFactory.deploy();
    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
      await nft.waitForDeployment(6);
      console.log(`Contract Address: ${nft.target}`);
      await delay(60000); // 1 minute delay
      await verifyContract(nft.target);
    }
  } catch (error) {
    console.log(error);
  }
};

main();

module.exports = main;
