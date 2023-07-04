require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  paths: {
    artifacts: "./backend/artifacts",
    sources: "./backend/contracts",
    cache: "./backend/cache",
    tests: "./backend/test"
  }, 
  defaultNetwork: "hardhat",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545"
    },
    hardhat: {
    },
    // polygon: {
    //   url: "https://rpc-mumbai.maticvigil.com/v1/2b5009cfe0dfe8f45a8f6c3083bee90d5c251034",
    //   accounts: [privateKey]
    // }

  },
};
