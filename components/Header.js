import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default class ThisComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        copySuccess: false
      }
    }

    copyCodeToClipboard = () => {
      const el = this.textArea
      el.select()
      document.execCommand("copy")
      this.setState({copySuccess: true})
    }


    render() {
      return (
        <Menu style={{ marginTop: '10px' }}>
          <Link route="https://ethereum.org/en/">
            <a className="item" target="_blank">
              <i class="ethereum icon"></i>
              </a>
          </Link>
          <Link route="/">
            <a class="item">
              <img src={'data:image/png;base64,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'} />
            </a>
          </Link>
          <Link route="/aboutus">
            <a className="item">
              <b>Safety Pin</b>, a Decentralize Peace Of Mind Platform
            </a>
          </Link>

          <button className="item" onClick={() => this.copyCodeToClipboard()}>
            <b>Pls Donate Eths to >>> Click here to Copy</b>
          </button>
          <div className="item">
            <textarea
            ref={(textarea) => this.textArea = textarea}
            value="0xa85A05887Ae1f8f4Ce2Ce102c20d4aAFD1273981" // this my public key pls copy and send $ to me thanks
            />
          </div>
            <Menu.Menu position="right">
              <Link route="/poolindex">
                <a className="item">
                <i class="home icon"></i>
                Pools Index
                </a>
              </Link>
              <Link route="/insurancepools/new">
                <a className="item">+</a>
              </Link>
            </Menu.Menu>
        </Menu>
      );
  };
}
