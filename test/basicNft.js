const { assert } = require("chai");
const { ethers } = require("hardhat");
const verifyContract = require("../utils/verify");

describe("DogNft Deployment", () => {
  let deployer;
  let DogNft;
  let nft;

  beforeEach(async () => {
    [deployer] = await ethers.getSigners();
    DogNft = await ethers.getContractFactory("DogNft");
    nft = await DogNft.deploy();
    // await nft.waitForDeployment(6);
    // Verify the contract on Etherscan
    // Note: Uncomment the following line if you want to verify on Etherscan
    // await verifyContract(nft.address);
  });

  describe("Constructor", () => {
    it("initializes the nft correctly.", async () => {
      const name = await nft.name();
      const symbol = await nft.symbol();
      const tokenCounter = await nft.getTokenCounter();
      assert.equal(name, "Gerald", "Name is Incorrect");
      assert.equal(symbol, "GER", "Incorrect NFT Symbol");
      assert.equal(tokenCounter, 0, "Token counter should be 0 initially");
    });
  });

  describe("Mint NFT", () => {
    beforeEach(async () => {
      const transactionResponse = await nft.mintNFt();
      await transactionResponse.wait(1);
    });
    it("Allows users to mint an NFT, and updates appropriately", async function () {
      const tokenURI = await nft.tokenURI(0);
      const tokenCounter = await nft.getTokenCounter();

      assert.equal(tokenCounter.toString(), "1");
      assert.equal(tokenURI, await nft.TOKEN_URI());
    });

    it("Show the correct balance and owner of an NFT", async function () {
      const deployerAddress = deployer.address;
      const deployerBalance = await nft.balanceOf(deployerAddress);
      const owner = await nft.ownerOf("0");

      assert.equal(deployerBalance.toString(), "1");
      assert.equal(owner, deployerAddress);
    });
  });
});
