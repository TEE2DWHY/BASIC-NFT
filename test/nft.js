const { assert } = require("chai");
const { ethers, waffle } = require("hardhat");
const verifyContract = require("../utils/verify");

describe("DogNft Deployment", () => {
  let owner;
  let DogNft;

  beforeEach(async () => {
    // Get the signers (accounts) from the hardhat network
    [owner] = await ethers.getSigners();

    // Deploy the DogNft contract
    DogNft = await ethers.getContractFactory("DogNft");
  });

  it("should deploy DogNft contract and verify on Etherscan", async () => {
    // Deploy the contract
    const nft = await DogNft.deploy();

    // Wait for deployment
    await nft.waitForDeployment(6);

    // Verify the contract on Etherscan
    await verifyContract(nft.target);

    // Check if the contract owner is set correctly or perform additional checks if needed
    assert.equal(
      await nft.getOwner(),
      owner.address,
      "Owner is not set correctly"
    );
    // Add more assertions or checks as needed
  });
});
