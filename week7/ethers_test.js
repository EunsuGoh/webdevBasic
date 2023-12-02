const ethers = require('ethers');
const dotenv = require('dotenv');
dotenv.config();
const alchemyApiKey = process.env.MUMBAI_API;
// console.log(alchemyApiKey);
const provider = new ethers.JsonRpcProvider(alchemyApiKey);

const address = '0xC7445f91c97EE9EA10F1542b1a9b320AB056fF83'; // 여러분의 지갑 주소 입력

async function getBalance() {
  const balance = await provider.getBalance(address);
  console.log(`Balance: ${balance} MATIC`); //wei 단위
  console.log(`Balance: ${ethers.formatEther(balance)} MATIC`); // ether 단위 (10^18)
}

getBalance();
