import web3 from './web3';
import InsurancePool from './build/InsurancePool.json';

export default address => {
  return new web3.eth.Contract(
    JSON.parse(InsurancePool.interface),
    address
  );
};
