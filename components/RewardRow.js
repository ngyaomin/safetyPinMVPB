import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import VerifierPool from '../ethereum/insurancePool';

class RewardRow extends Component {
  onApprove = async () => {
    const verifierPool = VerifierPool(this.props.address);
    const accounts = await web3.eth.getAccounts();

    await verifierPool.methods.approveReward(this.props.id).send({
      from: accounts[0]
    });
  };

  onFinalize = async () => {
    const verifiersPool = InsurancePool(this.props.address);
    const accounts = await web3.eth.getAccounts();

    await verifierPool.methods.finalizeReward(this.props.id).send({
      from: accounts[0]
    });
  };

  render() {
    const { Row, Cell } = Table;
    const { id, claim, verifiersCount } = this.props;
    const readyToFinalize = reward.verifierCount > verifiersCount / 2;

    return (
      <Row
        disabled={reward.complete}
        positive={readyToFinalize && !reward.complete}
      >
        <Cell>{id}</Cell>
        <Cell>{reward.description}</Cell>
        <Cell>{web3.utils.fromWei(reward.value, 'ether')}</Cell>
        <Cell>{reward.staker}</Cell>
        <Cell>{reward.verifierCount}/{verifiersCount}</Cell>
        <Cell>
          {reward.complete? null :(
            <Button color="green" basic onClick={this.onApprove}>
              Approve this Reward
            </Button>
          )}
        </Cell>
        <Cell>
          {reward.complete? null :(
            <Button color="orange" basic onClick={this.onFinalize}>
              Finalize this reward(as a manager)
            </Button>
          )}

        </Cell>
      </Row>
    );
  }
}

export default RewardRow;
