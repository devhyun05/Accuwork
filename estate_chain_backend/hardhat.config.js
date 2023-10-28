require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0", // Specify the Solidity compiler version

  networks: {
    hardhat: {
      chainId: 1337, // Chain ID for the Hardhat Network (localhost)
    },
  },
};
