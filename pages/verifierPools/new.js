import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import  { Router } from '../../routes'; // link not use now, maybe use later, i lazy so put here
import Uploady from "@rpldy/uploady";
import UploadButton from  "@rpldy/upload-button";

class VerifierPoolNew extends Component {
  state = {
    minimumStake: '',
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
        .createVerifierPool(this.state.minimumStake, this.state.documentHash)
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

        <h3>Create a new verifier pool</h3>

        <Uploady destination={{url: "https://drive.google.com/drive/folders/1cBBWggk_W6qbHvdNs8hBxPlNXqdURJFq?usp=sharing"}}>
          <UploadButton/> Upload Supporting Files Here (for demo only real upload server cant afford )
        </Uploady>
        <br/><br/>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label> Minimum Stake</label>
            <Input
              label="wei"
              labelPosition="right"
              value ={this.state.minimumStake}
              onChange={event => this.setState({ minimumStake: event.target.value })}
              />
          </Form.Field>

          <Form.Field>
            <label> Document Hashes (For now paste in the hash from the external ipfs system)</label>
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
            primary>Offer a new verifier pool
          </Button>
          <h5> Pls ensure you have logged in and connect to metamask for this site for transactions </h5>
        </Form>
      </Layout>
    );
  }
}



export default VerifierPoolNew;
