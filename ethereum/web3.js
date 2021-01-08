import Web3 from 'web3';
require('dotenv').config();
const infuraLink = process.env.infuraLink;

let web3;
const testCondition = typeof window !== 'undefined' && typeof window.web3 !== 'undefined';

if (testCondition) {
  web3 = new Web3(window.web3.currentProvider);
//  ethereum.enable();
} else {
  const provider = new Web3.providers.HttpProvider(
    infuraLink
  );
  web3 = new Web3(provider);
}

//else if (testCondition) {
//  const provider = new Web3.providers.HttpProvider(
//    'HTTP://127.0.0.1:8545'
  // );
//   web3 = new Web3(provider);
// } else if (testCondition) {
//   const provider = new Web3.providers.HttpProvider(
//     'HTTP://127.0.0.1:7545'
//   );
//   web3 = new Web3(provider);
// };


export default web3;
