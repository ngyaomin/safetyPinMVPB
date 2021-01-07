import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import VerifierPool from '../ethereum/verifierPool';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class StakeForm extends Component {
  state = {
    value: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();
    const verifierPool = VerifierPool(this.props.address);

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await verifierPool.methods.stake().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });

      Router.replaceRoute(`/verifierpools/${this.props.address}`)
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: '' });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Stake to Join</label>
          <Input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
            label="ether"
            labelPosition="right"
          />
        </Form.Field>

        <Message error header="Alamak!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading} >
          Pls stake
        </Button>
        <h5> Pls ensure you have logged in and connect to metamask for this site for transactions </h5>
      </Form>
    )
  }
}

export default StakeForm;
