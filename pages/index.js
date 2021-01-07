import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';
import MoveStuffAround from './ticker';


class InsurancePoolIndex extends Component {
  // creating a instance of class to get access to
  // static asign the function not to instance of the class but to class itself

  static async getInitialProps() {
    const insurancePools = await factory.methods.getDeployedInsurancePools().call();

    return { insurancePools: insurancePools };

    const verifierPools = await factory.methods.getDeployedVerifierPools().call();

    return { verifierPools: verifierPools };
  }

  renderInsurancePools() {
      const items = this.props.insurancePools.map(address => {
        return {
          header: address,
          description: (
            <div>
            <i class="hand point right outline icon"></i>
              <Link route={`/insurancepools/${address}`}>
                <a><b><mark>View this Pool</mark></b></a>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="ethereum icon"></i>
              <Link route={`https://rinkeby.etherscan.io/address/${address}`}>
                <a target="_blank">View in Etherscan</a>
              </Link>
            </div>
        ),
          fluid: true
        };
      });

      return <Card.Group items={items} />;
  }

  renderVerifierPools() {
      const items = this.props.verifierPools.map(address => {
        return {
          header: address,
          description: (
            <div>
            <i class="hand point right outline icon"></i>
              <Link route={`/verifierpools/${address}`}>
                <a><b><mark>View this Pool</mark></b></a>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="ethereum icon"></i>
              <Link route={`https://rinkeby.etherscan.io/address/${address}`}>
                <a target="_blank">View in Etherscan</a>
              </Link>
            </div>
        ),
          fluid: true
        };
      });

      return <Card.Group items={items} />;
  }

  render() {
    return (

      <Layout>
      <MoveStuffAround/>
        <div>
        <h7>We are not rasing any money, we are only accepting donations.
          <br/ > For more info email &nbsp;
          <a href="mailto:NG_YAO_MIN01.PT@ICHAT.SP.EDU.SG">
            <u>givemeyourmoney@cheatyourmoney.io</u>
          </a>
          <br/ >
          You can also see our latest smart contract
          <br/ >
          <a target="_blank" href="https://rinkeby.etherscan.io/address/0xb237d488Da554ffadA191038c31A8d585d2aa1F1">
          '0xb237d488Da554ffadA191038c31A8d585d2aa1F1'
          </a>
        </h7>
          <h3>Open Safety Pins Pools</h3>

          <Link route="/insurancepools/new">
            <a>
              <Button
                floated="right"
                content= "Create New Pool"
                icon="add circle" // the icon name is in document, be exact
                primary
              />
            </a>
          </Link>
          {this.renderInsurancePools()}
        </div>
      </Layout>
    );
  }
}

export default InsurancePoolIndex
