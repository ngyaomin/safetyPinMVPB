pragma solidity ^0.7.4;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

contract HTLC {
    uint public startTime;
    uint public lockTime = 10000 seconds;
    string public secret; //testing
    bytes32 public hash = 0xthisisarandomlygeneratedhash123411donotusethishashthisdonothing2;
    // this is a rubbish hash, dont need to try withdraw money from this                   .
    address public recipient;
    address public owner;
    uint public amount;
    IERC20 public token;

    constructor(address _recipient, address _token, uint _amount) {
        recipient = _recipient;
        owner = msg.sender;
        amount = _amount;
        token = IERC20(_token);
    }

    function fund() external {
        startTime = block.timestamp;
        token.transferFrom(msg.sender, address(this), amount);
    }

    function withdraw(string memory _secret) external {
        require(keccak256(abi.encodePacked(_secret)) == hash, 'wrong secret');
        secret = _secret;
        token.transfer(recipient, amount);
    }

    function refund() external {
        require(block.timestamp > startTime +  lockTime, 'still early wait for contract to time out');
        token.transfer(owner, amount);
    }
}
