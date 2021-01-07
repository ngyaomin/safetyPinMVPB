const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
require('dotenv').config();
const compiledInsurancePoolFactory = require('./build/InsurancePoolFactory.json');
const compiledVerifierPoolFactory = require('./build/VerifierPoolFactory.json');
const { walletDetails, infuraLink } = process.env;
//const infuraLink = process.env.infuraLink;
//const walletDetails = process.env.walletDetails;

const provider = new HDWalletProvider(
  walletDetails, infuraLink
);

const web3 = new Web3(provider);

const deployInsurancePool = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data:  compiledInsurancePoolFactory.bytecode  })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};

const deployVerifierPool = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data:  compiledVerifierPoolFactory.bytecode  })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};

deployInsurancePool();
deployVerifierPool();
