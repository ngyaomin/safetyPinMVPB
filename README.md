# DCInsurance1n2
//SPDX-License-Identifier: UNLICENSED
<br/>  use truffle 4. truffle 5 and above have too many conflict issues. The bug will be solve in truffle version 8 hopefully. 7 have not yet solve the issue.
<br/>  to install truffle 4, run npm uninstall -g truffle.
<br/>  then npm install -g truffle v4.0.7.
<br/>  run npm install.
<br/>  do not run npm audit and or audit fix. this will create more issues.
<br/>  replace your own infura and meta mask memonomics with walletDetails, infuraLink in deploy.js and web3.js file.
<br/>  enter ethereum folder, run compile.js and deploy.js to deploy json smart contract file base on your own infura and metamask creditial above.
<br/>  else create a .env file in the ethereum folder and enter the info there.
<br/>  you can choose to deploy to web and main net if you choose to do so.
<br/>  you need only deploy once, unless u made changes to the smart contracts.
<br/>  go back to root folder, run npm run dev.
<br/>  the app should be ready on localhost 3000.
<br/>  if for any reason it dont run on 3000, enter http://localhost:3000/insurancepools/new, this is some memory cache mgmt issue with next js, the code is alright.
<br/>  to initiate or create an insurance pool, you will need to have metamask log in, as manager have certain authority in the system, some authentication is needed.
<br/>  other than that on screen looks self explainary.
<br/> test can be run with npm run test.
<br/> for test 'allows a manager to make a claims request, this test will fail if paidPremiumRestricted is on' kindly comment out the modifier cause the modifier is in conflict with other tests i have no expertise yet to write a complex test case to handle this so for sake of my preious time we take some short cuts.
<br/ > the logo is temp, so is a link to an open source logo, once we get funding we will hire logo designer to create logo.
