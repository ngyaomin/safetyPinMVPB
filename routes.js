const routes = require('next-routes')();

routes
  .add('/insurancepools/new', '/insurancepools/new')
  .add('/insurancepools/:address', '/insurancepools/show')
  .add('/insurancepools/:address/claims', '/insurancepools/claims/index')
  .add('/insurancepools/:address/claims/new', '/insurancepools/claims/new')
  .add('/poolindex', '/poolindex')
  .add('/pictures/safetyPin.png', '/pictures/safetyPin.png');

module.exports = routes;
