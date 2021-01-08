// SPDX-License-Identifier: MIT
pragma solidity ^0.4.17;
//pragma solidity ^0.7.5;

contract InsurancePoolFactory {
    address[] public deployedInsurancePools;

    function createInsurancePool(uint minimum, string document) public {
        address newInsurancePool= new InsurancePool(minimum, msg.sender, document);
        deployedInsurancePools.push(newInsurancePool);
    }

    function getDeployedInsurancePools() public view returns (address[]) {
        return deployedInsurancePools;
    }
}

contract InsurancePool {

    struct Claim {
        uint8 validatorCount; // for control we will allow pool max to reach 100? max here 255 uint8
        uint value; // since wei is in value which can get quite big, i have no idea how big it will get
        string description;
        address claimer;
        bool complete;

        mapping(address => bool) validates;
    }

    Claim[] public claims;
    address public manager;
    uint public minimumPremium; // cant use 8 cause can get quite big
    string public documentHash; // for now we store it as a string first, later when
    // automated this will be store as a hash
    mapping(address => bool) public validators;
    uint8 public validatorsCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    modifier fundRestricted() {
        require(msg.value > minimumPremium);
         _;
    }

    modifier paidPremiumRestricted() {
        require(validators[msg.sender]);
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

    function InsurancePool(uint minimum, address creator, string document) public {
        manager = creator;
        minimumPremium = minimum;
        documentHash = document;
    }

    function fund() public fundRestricted stoppedInEmergency payable {
        validators[msg.sender] = true;
        validatorsCount++;
    }

    function createClaim(string description, uint value, address claimer)
        public restricted paidPremiumRestricted{
          // for testing we will let go paidPremiumRestricted in above , becasue test 6 is
          // will not auto make accounts 0 the manager, u will need to do some before each
          // complex which might mess up other test so for just this test we can let go of the
          // paid premium restricted above.

            Claim memory newClaim = Claim ({
                description: description,
                value: value,
                claimer: claimer,
                complete: false,
                validatorCount: 0
            });

        claims.push(newClaim);
    }

    function approveClaim(uint index) public paidPremiumRestricted {
        Claim storage claim = claims[index];

        require(!claim.validates[msg.sender]);

        claim.validates[msg.sender] = true;
        claim.validatorCount++;
    }

    function finalizeClaim(uint index) public restricted {
        Claim storage claim = claims[index];
        require(!claim.complete);
        require(claim.validatorCount > (validatorsCount / 2)); // 50% for now , uint can only handle whole numbers lol

        claim.complete = true;
        claim.claimer.transfer(claim.value);

    }

    function getDetail() public view returns (
      uint, uint, uint, uint8, address, string // here the uint8 is in this place as this
      // relates to an array and so need to be in certain order for display frontend to be right
      ) {
        return (
          minimumPremium,
          this.balance,
          claims.length,
          validatorsCount,
          manager,
          documentHash
        );
    }

    function getClaimsCount() public view returns (uint) {
      return claims.length;
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
