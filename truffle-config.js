require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 9545,        // Standard Ethereum port (default: none)
      network_id: "*",   // Any network (default: none)
    },

    // Add the Sepolia network
    sepolia: {
      provider: () => 
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY1],
          providerOrUrl: process.env.SEPOLIA_RPC_ENDPOINT,
        }),
      network_id: 11155111, // Sepolia's network ID
      gas: 3000000, // Adjust gas limit
      gasPrice: 20000000000, // 20 Gwei
      timeoutBlocks: 200, // Wait for up to 200 blocks for a transaction confirmation
      deploymentPollingInterval: 15000, // Increase polling interval to 15 seconds
      skipDryRun: true, // Skip dry-run simulation
    },
  },

  compilers: {
    solc: {
      version: "0.8.15", // Use Solidity version 0.8.15
    },
  },
};

