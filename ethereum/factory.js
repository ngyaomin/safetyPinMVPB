import web3 from './web3'; // we are getting the instance from web3.js not the constructor
import InsurancePoolFactory from  './build/InsurancePoolFactory.json';
const fs = require('fs');
//const deployedTo = fs.readFileSync(".deployedTo").toString().trim();


const instance = new web3.eth.Contract(
  JSON.parse(InsurancePoolFactory.interface),
  //deployedTo
//  '0xB16fC8C80eD3b91D841c394E881BCC4943775808'
  '0x8E17Fa864cB4A2DF190c4C13Ba48424162dFE2e6'
  //'0x34056C01fff4c065ce30A9Ddb3AbF85426927534'
  //'0xb237d488Da554ffadA191038c31A8d585d2aa1F1'
  //'0x133474fEA1a837D9706B15B01A54E7BF92493278'
  //'0xc7A9e3Eac2dA6a5D1Dd5a6058a8b0DC530c5f41A' // use this if shit happens
  //'0xC82E40B9053Ae8FEB3851e2D4837601D3029A910'
  //'0x216418ED2c677cbD4f237cdD87603331fe7aC8af'
  //'0x6a88f066e2178b84a39eCaAd7313d28dB7d82390'
  //'0xE776D98A50b28a91F6EAA57272815922d818c02E'
  //'0x675eA93065Db6f6A3e60AF77a50937b52529BEE3'
  //'0x935A6A54cB1ff4E4fBA2E4fe3e6afce51138D155'
  //'0x78604DC95eF02E72D75AA3864794ad567918d397'
  //'0xe03F5B704DFb9876aa4e0DcB99D0bc8370fFf3EC' // something wrong, might not work
  //'0x82bF4BA376837189f6959872d7E0B62e3faC57dd' // this is my deloyed address replace this
  // with urs, else u will just be running my deployed contract :P
  // i have keep the previous contract address here so that u can referecne, or i can ref
);

export default instance;
