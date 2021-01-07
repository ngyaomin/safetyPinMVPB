const path = require('path');
const solc = require('solc');
const fs = require('fs-extra'); // filesystem

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath); // remove the build folder , so that content inside it only run once
// ie we delete it and then run our own contents below

const insurancePoolPath = path.resolve(__dirname, 'contracts', 'InsurancePool.sol');
const source = fs.readFileSync(insurancePoolPath, 'utf8' );
const verifierPoolPath = path.resolve(__dirname, 'contracts', 'VerifierPool.sol');
const source = fs.readFileSync(verifierPoolPath, 'utf8' );
const output = solc.compile(source, 2).contracts; // there is only one source in this case one contracts

// now we recreate the build folder
fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}
