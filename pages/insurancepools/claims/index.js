import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import InsurancePool from '../../../ethereum/insurancePool';
import ClaimRow from '../../../components/ClaimRow';

class ClaimIndex extends Component {

  static async getInitialProps(props) {
    const { address } = props.query;
    const insurancePool = InsurancePool(address);
    const claimCount = await insurancePool.methods.getClaimsCount().call();
    const validatorsCount = await insurancePool.methods.validatorsCount().call();

    const claims = await Promise.all(
      Array(parseInt(claimCount))
        .fill()
        .map((element, index) => {
          return insurancePool.methods.claims(index).call();
        })
    );


    return  { address, claims, claimCount, validatorsCount };
  }
    renderRows() {
      return this.props.claims.map((claim, index) => {
        return (
          <
            ClaimRow
              key={index}
              id={index}
              claim={claim}
              address={this.props.address}
              validatorsCount={this.props.validatorsCount}
          />
        );
      });
    }


  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <h3>Claims List</h3>
        <h5> Pls ensure you have logged in and connect to metamask for this site for transactions </h5>
        <Link route={`/insurancepools/${this.props.address}/claims/new`}>
          <a>
            <Button primary floated="right" style={{ marginBottom: 10 }}>Add a Claim</Button>
          </a>
        </Link>
        <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount Claim</HeaderCell>
            <HeaderCell>Claimer</HeaderCell>
            <HeaderCell>Validated Count</HeaderCell>
            <HeaderCell>Validate</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Row>
        </Header>
        <Body>{this.renderRows()}</Body>
        </Table>
        <div>Found {this.props.claimCount} claims.</div>
      </Layout>
    );
  }
}

export default ClaimIndex;
