// SPDX-License-Identifier: MIT
pragma solidity ^0.4.17;
//pragma solidity ^0.7.5;

contract VerifierPoolFactory {
    address[] public deployedInsurancePools;

    function createVerifierPool(uint minimum, string document) public {
        address newVerifierPool= new VerifierPool(minimum, msg.sender, document);
        deployedVerifierPools.push(newVerifierPool);
    }

    function getDeployedVerifierPools() public view returns (address[]) {
        return deployedVerifierPools;
    }
}

contract VerifierPool {

    struct Rewards {
        uint8 verifierCount; // for control we will allow pool max to reach 100? max here 255 uint8
        uint value; // since wei is in value which can get quite big, i have no idea how big it will get
        string description;
        address staker;
        bool complete;

        mapping(address => bool) validates;
    }

    Rewards[] public rewards;
    address public manager;
    uint public minimumStake; // cant use 8 cause can get quite big
    string public documentHash; // for now we store it as a string first, later when
    // automated this will be store as a hash
    mapping(address => bool) public validators;
    uint8 public verifiersCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    modifier fundRestricted() {
        require(msg.value > minimumStake);
         _;
    }

    modifier stakeRestricted() {
        require(verifiers[msg.sender]);
        _;
    }

    bool isStopped = false;

    modifier stoppedInEmergency {
        require(!isStopped);
        _;
    }

    modifier onlyWhenStopped {
      require(isStopped);
      _;
    }

    function VerifierPool(uint minimum, address creator, string document) public {
        manager = creator;
        minimumStake = minimum;
        documentHash = document;
    }

    function stake() public fundRestricted stoppedInEmergency payable {
        verifiers[msg.sender] = true;
        verifiersCount++;
    }

    function createReward(string description, uint value, address staker)
        public restricted paidPremiumRestricted{
          // for testing we will let go paidPremiumRestricted in above , becasue test 6 is
          // will not auto make accounts 0 the manager, u will need to do some before each
          // complex which might mess up other test so for just this test we can let go of the
          // paid premium restricted above.

            Claim memory newReward = Reward ({
                description: description,
                value: value,
                staker: staker,
                complete: false,
                verfierCount: 0
            });

      rewards.push(newReward);
    }

    function approveReward(uint index) public stakeRestricted {
        Reward storage reward = rewards[index];

        require(!reward.verifies[msg.sender]);

        claim.verifies[msg.sender] = true;
        claim.verifierCount++;
    }

    function finalizeReward(uint index) public restricted {
        Reward storage reward = rewards[index];
        require(!reward.complete);
        require(reward.verfierCount > (verifiersCount / 2)); // 50% for now , uint can only handle whole numbers lol

        reward.complete = true;
        reward.staker.transfer(reward.value);

    }

    function getDetail() public view returns (
      uint, uint, uint, uint8, address, string // here the uint8 is in this place as this
      // relates to an array and so need to be in certain order for display frontend to be right
      ) {
        return (
          minimumStake,
          this.balance,
          rewards.length,
          verifiersCount,
          manager,
          documentHash
        );
    }

    function getRewardsCount() public view returns (uint) {
      return rewards.length;
    }

// this withdraw function is abritary because it is unfair to everyone
// given the state of system, we are still working on making withdrawal system
// fair and yet with integrity
// for now we would not be puttting the withdraw function in the front end becasue
// we do not wish ppl to have the illusion that they can withdraw
// this is a fallback just in case, and if just in case we can then code a withdraw function
// to allow withdraw
    function withdraw(uint withdrawalAmount) restricted public onlyWhenStopped returns(uint) {
      require(withdrawalAmount < this.balance);
      msg.sender.transfer(withdrawalAmount);
      return this.balance;
    }

}
