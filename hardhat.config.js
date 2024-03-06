require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.24",
    defaultNetwork: "sepolia",
    networks: {
        hardhat: {},
        sepolia: {
            url: "https://eth-sepolia.g.alchemy.com/v2/ovCG6hx9y_hmWXXcbb_9OwrnMIVPKbXJ",
            accounts: ["d834a4eb29486d9d97cb0595ca34e9daaea7307e4031a4aaaa3e8f6efd4e86fe"]
        }
    },
};