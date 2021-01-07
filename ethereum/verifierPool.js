import web3 from './web3';
import VerifierPool from './build/VeriferPool.json';

export default address => {
  return new web3.eth.Contract(
    JSON.parse(VerifierPool.interface),
    address
  );
};
