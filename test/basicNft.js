const { assert } = require("chai");
const { ethers, waffle } = require("hardhat");
const verifyContract = require("../utils/verify");

describe("DogNft Deployment", () => {
  let owner;
  let DogNft;
  let nft;

  beforeEach(async () => {
    // Get the signers (accounts) from the hardhat network
    [owner] = await ethers.getSigners();

    // Deploy the DogNft contract
    DogNft = await ethers.getContractFactory("DogNft");
    // Deploy the contract
    nft = await DogNft.deploy();

    // Wait for deployment
    await nft.waitForDeployment(6);

    // // Verify the contract on Etherscan
    // await verifyContract(nft.target);
  });

  it("initializes the nft correctly.", async () => {
    const name = await nft.name();
    const symbol = await nft.symbol();
    const tokenCounter = await nft.getTokenCounter();
    assert.equal(name, "Gerald", "Name is Incorrect");
    assert.equal(symbol, "GER", "Incorrect NFT Symbol");
    assert.equal(tokenCounter, "0");
  });

  it("should check if the owner is set correctly", async () => {
    assert.equal(
      await nft.getOwner(),
      owner.address,
      "Owner is not set correctly"
    );
  });
});
