const path = require('path');
const solc = require('solc');
const fsextra = require('fs-extra'); // filesystem

const buildPath = path.resolve(__dirname, 'build');
fsextra.removeSync(buildPath); // remove the build folder , so that content inside it only run once
// ie we delete it and then run our own contents below

const insurancePoolPath = path.resolve(__dirname, 'contracts', 'InsurancePool.sol');
const source = fsextra.readFileSync(insurancePoolPath, 'utf8' );
const output = solc.compile(source, 1).contracts; // there is only one source in this case one contracts

// now we recreate the build folder
fsextra.ensureDirSync(buildPath);

for (let contract in output) {
  fsextra.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}
