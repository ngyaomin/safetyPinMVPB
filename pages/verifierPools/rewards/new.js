import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import VerifierPool from '../../../ethereum/verifierPool';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';
import Uploady from "@rpldy/uploady";
import UploadButton from  "@rpldy/upload-button";

class RewardNew extends Component {
  state = {
    value: '',
    description: '',
    staker: '',
    loading: false,
    errorMessage: ''
  };

  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  onSubmit = async event => {
    event.preventDefault();

    const verifierPool = VerifierPool(this.props.address);
    const { description, value, staker} = this.state;

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await verifierPool.methods.createReward(
          description,
          web3.utils.toWei(value, 'ether'),
          staker
      ).send({ from: accounts[0] });

      Router.pushRoute(`/verifierpools/${this.props.address}/rewards`);
    } catch (err) {
      this.setState({ errorMessage: err.message })
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <Link route={`/verifierpools/${this.props.address}/rewards`}>
          <a>Back</a>
        </Link>
        <h3>Create a new reward request</h3>
        <Uploady destination={{url: "https://fakeuploaddrive.fake"}}>
          <UploadButton/> Upload Supporting Files Here (for demo only real upload server cant afford )
        </Uploady>
        <br/>
        <br/>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Description(for now include inside bracket the external IPFS hashes)</label>
            <Input
              value={this.state.description}
              onChange={event =>
                this.setState({ description: event.target.value  })}
            />
          </Form.Field>

          <Form.Field>
            <label>Value in eth</label>
            <Input
              value={this.state.value}
              onChange={event =>
                this.setState({ value: event.target.value  })}
            />
          </Form.Field>

          <Form.Field>
            <label>Staker</label>
            <Input
              value={this.state.staker}
              onChange={event =>
                this.setState({ staker: event.target.value  })}
            />
          </Form.Field>

          <Message error header="Something wrong" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>Request a new Reward</Button>
        </Form>
      </Layout>
    )
  }
}

export default RewardNew;
