const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/InsurancePoolFactory.json');
const compiledInsurancePool = require('../ethereum/build/InsurancePool.json');

let accounts;
let factory;
let insurancePoolAddress;
let insurancePool;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  await factory.methods.createInsurancePool('100', 'test').send({
    from: accounts[0],
    gas: '1000000'
  });

  const addresses = await factory.methods.getDeployedInsurancePools().call();
    insurancePoolAddress = addresses[0]

    [insurancePoolAddress] = await factory.methods.getDeployedInsurancePools().call();

  insurancePool = await new web3.eth.Contract(
    JSON.parse(compiledInsurancePool.interface),
    insurancePoolAddress
  );
});

describe('InsurancePools', () => {
  it('deploys a factory and an insurancePool', () => {
    assert.ok(factory.options.address);
    assert.ok(insurancePool.options.address);
  });

  it('marks deployer as the insurancePool manager', async () => {
    const manager = await insurancePool.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it('allows ppl to fund (pay premium) insurancePool and marks them as validators', async () => {
    await insurancePool.methods.fund().send({
      value: '100',
      from: accounts[1]
    });
    const isFunder = await insurancePool.methods.validators(accounts[1]).call();
    assert(isFunder);
  });

  it('require min funding', async () => {
    try {
      await insurancePool.methods.fund().send({
        value: '5', // < min of 100
        from: accounts[1]
      });
      assert(false);
    } catch (e) {
      assert(e);
    }
  });

  it('allows a manager to make a claims request, this test will fail if paidPremiumRestricted is on', async () => {
      // to pass the test comment out that modifer
    await insurancePool.methods
      .createClaim('Cant Find GF', '100', accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });
      const claim  = await insurancePool.methods.claims(0).call();

      assert.equal('Cant Find GF', claim.description)
  });

  it('processes claims', async () => {
    await insurancePool.methods.fund().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    });

    await insurancePool.methods
      .createClaim('A', web3.utils.toWei('5', 'ether'), accounts[1])
      .send({ from: accounts[0], gas: '1000000' });

    await insurancePool.methods.approveClaim(0).send({
      from: accounts[0],
      gas: '1000000'
    });

    await insurancePool.methods.finalizeClaim(0).send({
      from: accounts[0],
      gas: '1000000'
    });

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, 'ether');
    balance = parseFloat(balance);
    console.log (balance);
    assert(balance > 103)
  });
});
