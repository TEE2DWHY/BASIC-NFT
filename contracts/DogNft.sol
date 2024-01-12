// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract DogNft is ERC721URIStorage {
    address public nftOwner;
    string public constant TOKEN_URI =
        "https://ipfs.io/ipfs/QmQfUYmNinQa9PKLTMeeCUZoBkYtCei5EskG4zeyo5u9fm?filename=details.json";
    uint256 private s_tokenCounter;

    constructor() ERC721("Gerald", "GER") {
        s_tokenCounter = 0;
        nftOwner = msg.sender;
    }

    function mintNFt() public returns (uint256) {
        _safeMint(msg.sender, s_tokenCounter);
        s_tokenCounter += 1;
        return s_tokenCounter;
    }

    function tokenURI(
        uint256
    ) public view virtual override returns (string memory) {
        return TOKEN_URI;
    }

    function getTokenCounter() public view returns (uint256) {
        return s_tokenCounter;
    }

    function getOwner() public view returns (address) {
        return nftOwner;
    }
}
