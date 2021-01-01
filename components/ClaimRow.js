import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import InsurancePool from '../ethereum/insurancePool';

class ClaimRow extends Component {
  onApprove = async () => {
    const insurancePool = InsurancePool(this.props.address);
    const accounts = await web3.eth.getAccounts();

    await insurancePool.methods.approveClaim(this.props.id).send({
      from: accounts[0]
    });
  };

  onFinalize = async () => {
    const insurancePool = InsurancePool(this.props.address);
    const accounts = await web3.eth.getAccounts();

    await insurancePool.methods.finalizeClaim(this.props.id).send({
      from: accounts[0]
    });
  };

  render() {
    const { Row, Cell } = Table;
    const { id, claim, validatorsCount } = this.props;
    const readyToFinalize = claim.validatorCount > validatorsCount / 2;

    return (
      <Row
        disabled={claim.complete}
        positive={readyToFinalize && !claim.complete}
      >
        <Cell>{id}</Cell>
        <Cell>{claim.description}</Cell>
        <Cell>{web3.utils.fromWei(claim.value, 'ether')}</Cell>
        <Cell>{claim.claimer}</Cell>
        <Cell>{claim.validatorCount}/{validatorsCount}</Cell>
        <Cell>
          {claim.complete? null :(
            <Button color="green" basic onClick={this.onApprove}>
              Validate this claim
            </Button>
          )}
        </Cell>
        <Cell>
          {claim.complete? null :(
            <Button color="orange" basic onClick={this.onFinalize}>
              Finalize this claim(as a manager)
            </Button>
          )}

        </Cell>
      </Row>
    );
  }
}

export default ClaimRow;
