// For learning purpose only

const { ethers, JsonRpcProvider, formatEther, parseEther } = require("ethers");
const RPC =
    "https://eth-sepolia.g.alchemy.com/v2/ovCG6hx9y_hmWXXcbb_9OwrnMIVPKbXJ";
const account1 = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";
const privateKey =
    "d834a4eb29486d9d97cb0595ca34e9daaea7307e4031a4aaaa3e8f6efd4e86fe";

const provider = new JsonRpcProvider(RPC);

const wallet = new ethers.Wallet(privateKey, provider);
async function call() {
    // const bal = await provider.getBalance(account1);
    // console.log(formatEther(bal));
    // console.log(await wallet.getAddress());
    // console.log(formatEther(await provider.getBalance(account)));
    // const trans = await wallet.sendTransaction({
    //     to: account1,
    //     value: parseEther("0.4"),
    // });
    // await trans.wait();
    // console.log("Transaction completed succesfully");
}
call();