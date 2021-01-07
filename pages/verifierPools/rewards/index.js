import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import VerifierPool from '../../../ethereum/verifierPool';
import RewardRow from '../../../components/RewardRow';

class RewardIndex extends Component {

  static async getInitialProps(props) {
    const { address } = props.query;
    const verifierPool = VerifierPool(address);
    const rewardCount = await verifierPool.methods.getRewardsCount().call();
    const verifiersCount = await verifierPool.methods.verifiersCount().call();

    const reward = await Promise.all(
      Array(parseInt(rewardCount))
        .fill()
        .map((element, index) => {
          return verifierPool.methods.rewards(index).call();
        })
    );


    return  { address, rewards, rewardCount, verifiersCount };
  }
    renderRows() {
      return this.props.rewards.map((reward, index) => {
        return (
          <
            RewardRow
              key={index}
              id={index}
              reward={reward}
              address={this.props.address}
              verifiersCount={this.props.verifiersCount}
          />
        );
      });
    }


  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <h3>Rewards List</h3>
        <h5> Pls ensure you have logged in and connect to metamask for this site for transactions </h5>
        <Link route={`/verifierpools/${this.props.address}/rewards/new`}>
          <a>
            <Button primary floated="right" style={{ marginBottom: 10 }}>Add a Reward</Button>
          </a>
        </Link>
        <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount Reward</HeaderCell>
            <HeaderCell>Staker</HeaderCell>
            <HeaderCell>Verified Count</HeaderCell>
            <HeaderCell>Verify</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Row>
        </Header>
        <Body>{this.renderRows()}</Body>
        </Table>
        <div>Found {this.props.rewardCount} rewards.</div>
      </Layout>
    );
  }
}

export default RewardIndex;
