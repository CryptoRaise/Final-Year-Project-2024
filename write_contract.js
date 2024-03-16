const {
    ethers,
    JsonRpcProvider,
    Contract,
    formatEther,
    parseEther,
} = require("ethers");
const transfer = require("./transfer.json");

const RPC =
    "https://eth-sepolia.g.alchemy.com/v2/ovCG6hx9y_hmWXXcbb_9OwrnMIVPKbXJ";
const account1 = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";
const privateKey =
    "d834a4eb29486d9d97cb0595ca34e9daaea7307e4031a4aaaa3e8f6efd4e86fe";

const provider = new JsonRpcProvider(RPC);

// for writing purpose, we need to have signer and in this case, we have wallet as signer
const wallet = new ethers.Wallet(privateKey, provider);

const contractAddress = "0x429c9e0a7f3b1e9B8Aae2bFF48A3482B8b42718e"; // copied from remix ide's deployed contract address
const ABI = transfer.abi;

async function writeContract() {
    const contract = new Contract(contractAddress, ABI, wallet);
    console.log(
        `${account1} : ${formatEther(await provider.getBalance(account1))}`
    );
    console.log(
        `${await wallet.getAddress()} : ${formatEther(
      await provider.getBalance(wallet)
    )}`
    );

    const txn = await contract._transfer(account1, {
        value: parseEther("0.000005"),
    });
    await txn.wait();

    console.log(
        `${account1} : ${formatEther(await provider.getBalance(account1))}`
    );
    console.log(
        `${await wallet.getAddress()} : ${formatEther(
      await provider.getBalance(wallet)
    )}`
    );
}
writeContract();