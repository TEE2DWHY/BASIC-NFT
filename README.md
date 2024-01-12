# NFT Project

## Overview

This project is a simple implementation of an NFT (Non-Fungible Token) contract using Ethereum and the ERC-721 standard. It allows users to mint NFTs and provides basic functionalities like retrieving the NFT owner, total supply, and token URI.

## Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/TEE2DWHY/BASIC-NFT.git
   ```

2. Create a single .env file in the root directory with the following content:

```bash
   GOERLI_URL=<your-goerli-rpc-url>
   PRIVATE_KEY=<your-private-key>
   ETHERSCAN_API_KEY=<your-etherscan-api-key>
```

3. Install dependencies and compile the contracts:

```bash
  npm install
   npx hardhat compile
   4 Deploy the contract to the Goerli test network:
   npx hardhat run scripts/deploy.js --network goerli
```
