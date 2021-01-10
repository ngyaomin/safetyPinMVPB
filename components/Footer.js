import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

var style = {
    borderTop: "1px solid #E7E7E7",
    padding: "0px",
    position: "fixed",
    left: "0",
    bottom: "50px",
    height: "0px",
    width: "100%",
    marginTop: "100px"
}

export default class ThisComponent extends Component {
    render() {
      return (
        <div style={style}>
        <Menu>
            <Menu.Menu position="left">
              <Link route="https://github.com/ngyaomin/distributedInsurance1n2">
                <a className="item" target="_blank">
                  <i class="github icon"></i>
                  GitHub Depository for this project
                </a>
              </Link>
            </Menu.Menu>
            <Menu.Menu position="left">
              <Link route="https://github.com/ngyaomin/safetyPinIPFS">
                <a className="item" target="_blank">
                  <i class="github icon"></i>
                  Safety Pin IPFS GitHub
                </a>
              </Link>
            </Menu.Menu>
            <Menu.Menu position="left">
              <Link route="https://drive.google.com/file/d/1_d3yFTCR20hL_GiWs1Zf45bnTTt1uENl/view?usp=sharing">
                <a className="item" target="_blank">
                  <i class="google drive icon"></i>
                  Link to PowerPoint Presentation on Google Drive
                </a>
              </Link>
            </Menu.Menu>
            <Menu.Menu position="left">
              <Link route="https://ipfs.infura.io/ipfs/QmPjkaAcAp3Hy7YBAkqgEWzcCLxFKePYJVaHHkuqeaT9bi">
                <a className="item" target="_blank">
                  <i class="download icon"></i>
                  Download PowerPoint Presentation on IPFS
                </a>
              </Link>
            </Menu.Menu>
            <Menu.Menu position="right">
              <Link route="https://www.linkedin.com/in/ngyaomin/">
                <a className="item" target="_blank">
                  <i class="linkedin icon"></i>
                  My linkedin Profile
                </a>
              </Link>
            </Menu.Menu>


        </Menu>
        </div>
      );
  };
}
