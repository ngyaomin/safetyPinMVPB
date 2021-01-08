import React, { Component } from 'react';
import Layout from '../../components/Layout';
import VerifierPool from '../../ethereum/verifierPool';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import StakeForm from '../../components/StakeForm';
import { Link } from '../../routes';

class VerifierPoolShow extends Component {
  static async getInitialProps(props) {
    const verifierPool = VerifierPool(props.query.address);

    const detail = await verifierPool.methods.getDetail().call();

    return {
      address: props.query.address,
      minimumStake: detail[0],
      balance: detail[1],
      rewardsCount: detail[2],
      verifiersCount: detail[3],
      manager: detail[4],
      documentHash: detail[5]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumStake,
      documentHash,
      rewardsCount,
      verifiersCount
    } = this.props;

    const items = [

      {
        header: manager,
        meta: 'Address of manager',
        description: 'Manager create this pool and can create rewards on behalf of',
        style: { overflowWrap: 'break-word' }
      }
      ,
      {
        header: minimumStake,
        meta: 'Minimum to Stake in weis',
        description: 'To join as verifier and get rewarded you must stake this min amount'
      },
      {
        header: rewardsCount,
        meta: 'Number of Rewards',
        description: 'Number of rewards so far on this safety pin pool.'
      },
      {
        header: verfiersCount,
        meta: 'Number of verifiers',
        description: 'Number of addresses that staked in this pool and can act as verifiers'
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Safety Pin verifier Pool Balance(ether)',
        description: 'How much fund this pool has left'
      },
      {
        header: documentHash,
        meta: 'Document Hash',
        description: 'Hash of Uploaded Documents',
        style: { overflowWrap: 'break-word' }
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Pool Details Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              {this.renderCards()}
              <Grid.Row>
                &nbsp;
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Link route={`/verifierpools/${this.props.address}/rewards`}>
                    <a>
                      <Button primary>View Rewards</Button>
                    </a>
                  </Link>
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={6}>
              <StakeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            &nbsp;
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default VerifierPoolShow;
