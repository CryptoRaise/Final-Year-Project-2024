const { ethers, JsonRpcProvider, Contract } = require("ethers");
const transfer = require("./transfer.json");

const RPC =
    "https://eth-sepolia.g.alchemy.com/v2/ovCG6hx9y_hmWXXcbb_9OwrnMIVPKbXJ";
// const account1 = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";
// const privateKey =
// "d834a4eb29486d9d97cb0595ca34e9daaea7307e4031a4aaaa3e8f6efd4e86fe";

const provider = new JsonRpcProvider(RPC);
// provider is used to only read contract's data

// const wallet = new ethers.Wallet(privateKey, provider);

const contractAddress = "0x429c9e0a7f3b1e9B8Aae2bFF48A3482B8b42718e"; // copied from remix ide's deployed contract address
const ABI = transfer.abi;

async function readContract() {
    // getting current block's no.
    const block = await provider.getBlockNumber();
    const contract = new Contract(contractAddress, ABI, provider);
    // const transactions = await contract.queryFilter('transactions');
    const transactions = await contract.queryFilter('transactions', block - 20, block);
    // in query filter, we pass the event's name as argument
    // console.log(transactions);
    transactions.map((item) => {
        console.log(item.args.to, ":", item.args.amount);
    })

    /* let the event has 2 parameters to be indexed : address and amount
    then, filtering with the help of them :-

    // filtering according to an address :-
    const trans=contract.filters.transactions('0x...');
    const transactions=await contract.queryFilter(trans);

    // filtering according to amount=1
    const trans=contract.filters.transactions(null,'100....(18times bcoz of wei)');
    */
}
readContract();