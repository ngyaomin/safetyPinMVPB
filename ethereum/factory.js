import web3 from './web3'; // we are getting the instance from web3.js not the constructor
import InsurancePoolFactory from  './build/InsurancePoolFactory.json';
import deployedTo from './deployedTo';
const fs = require('fs');
require('dotenv').config();

const instance = new web3.eth.Contract(
  JSON.parse(InsurancePoolFactory.interface),
  deployedTo
);

export default instance;
