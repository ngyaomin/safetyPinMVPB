import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import  { Router } from '../../routes'; // link not use now, maybe use later, i lazy so put here

class InsurancePoolNew extends Component {
  state = {
    minimumPremium: '',
    errorMessage: '',
    documentHash: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();

      await factory.methods
        .createInsurancePool(this.state.minimumPremium, this.state.documentHash)
        .send({
          from: accounts[0]
        });

      Router.pushRoute('/');

      } catch (err) {
        this.setState({ errorMessage: err.message });
      }

      this.setState({ loading: false });
  };

  render() {
    return (
      // right now we are doing the case where few requesters can request same insurance
      // if the case of few providers providing same insurance than we will set up a
      // min payout
      // the mechanics will be complex, but for now we keep this simple
      <Layout>
        <h3>Create a new insurance pool offer</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label> Minimum Premium</label>
            <Input
              label="wei"
              labelPosition="right"
              value ={this.state.minimumPremium}
              onChange={event => this.setState({ minimumPremium: event.target.value })}
              />
          </Form.Field>
          <Form.Field>
            <label> Document Hashes (will be automated in next upgrade)</label>
            <Input
              label="Hash"
              labelPosition="right"
              value ={this.state.documentHash}
              onChange={event => this.setState({ documentHash: event.target.value })}
              />
          </Form.Field>

          <Message error header="Opps!" content={this.state.errorMessage} />
          <Button
            loading={this.state.loading}
            primary>Offer a new pool
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default InsurancePoolNew;
