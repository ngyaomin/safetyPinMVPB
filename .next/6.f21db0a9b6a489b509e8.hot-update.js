webpackHotUpdate(6,{

/***/ 1492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, __resourceQuery) {

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _web = __webpack_require__(637);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(563).config();
var infuraLink = process.env.infuraLink;

function ethereumPrice() {

   var web3 = new _web2.default(infuraLink);
   var aggregatorV3InterfaceABI = [{ "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "description", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint80", "name": "_roundId", "type": "uint80" }], "name": "getRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }];
   var addr = "0x9326BFA02ADD2366b30bacB125260Af641031331";
   var priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr);

   priceFeed.methods.latestRoundData().call().then(function (roundData) {
      console.log("Latest Round Data", roundData);
      return roundData;
   });
}

exports.default = ethereumPrice;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbmZpZyIsImluZnVyYUxpbmsiLCJwcm9jZXNzIiwiZW52IiwiZXRoZXJldW1QcmljZSIsIndlYjMiLCJhZ2dyZWdhdG9yVjNJbnRlcmZhY2VBQkkiLCJhZGRyIiwicHJpY2VGZWVkIiwiZXRoIiwiQ29udHJhY3QiLCJtZXRob2RzIiwibGF0ZXN0Um91bmREYXRhIiwiY2FsbCIsInRoZW4iLCJyb3VuZERhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBQ0FBLGtCQUFrQkMsTUFBbEI7QUFDQSxJQUFJQyxhQUFhQyxRQUFRQyxHQUFSLENBQVlGLFVBQTdCOztBQUVBLFNBQVNHLGFBQVQsR0FBeUI7O0FBRXRCLE9BQUlDLE9BQU8sa0JBQVNKLFVBQVQsQ0FBWDtBQUNBLE9BQUlLLDJCQUEyQixDQUFDLEVBQUUsVUFBVSxFQUFaLEVBQWdCLFFBQVEsVUFBeEIsRUFBb0MsV0FBVyxDQUFDLEVBQUUsZ0JBQWdCLE9BQWxCLEVBQTJCLFFBQVEsRUFBbkMsRUFBdUMsUUFBUSxPQUEvQyxFQUFELENBQS9DLEVBQTJHLG1CQUFtQixNQUE5SCxFQUFzSSxRQUFRLFVBQTlJLEVBQUQsRUFBNkosRUFBRSxVQUFVLEVBQVosRUFBZ0IsUUFBUSxhQUF4QixFQUF1QyxXQUFXLENBQUMsRUFBRSxnQkFBZ0IsUUFBbEIsRUFBNEIsUUFBUSxFQUFwQyxFQUF3QyxRQUFRLFFBQWhELEVBQUQsQ0FBbEQsRUFBZ0gsbUJBQW1CLE1BQW5JLEVBQTJJLFFBQVEsVUFBbkosRUFBN0osRUFBOFQsRUFBRSxVQUFVLENBQUMsRUFBRSxnQkFBZ0IsUUFBbEIsRUFBNEIsUUFBUSxVQUFwQyxFQUFnRCxRQUFRLFFBQXhELEVBQUQsQ0FBWixFQUFrRixRQUFRLGNBQTFGLEVBQTBHLFdBQVcsQ0FBQyxFQUFFLGdCQUFnQixRQUFsQixFQUE0QixRQUFRLFNBQXBDLEVBQStDLFFBQVEsUUFBdkQsRUFBRCxFQUFvRSxFQUFFLGdCQUFnQixRQUFsQixFQUE0QixRQUFRLFFBQXBDLEVBQThDLFFBQVEsUUFBdEQsRUFBcEUsRUFBc0ksRUFBRSxnQkFBZ0IsU0FBbEIsRUFBNkIsUUFBUSxXQUFyQyxFQUFrRCxRQUFRLFNBQTFELEVBQXRJLEVBQTZNLEVBQUUsZ0JBQWdCLFNBQWxCLEVBQTZCLFFBQVEsV0FBckMsRUFBa0QsUUFBUSxTQUExRCxFQUE3TSxFQUFvUixFQUFFLGdCQUFnQixRQUFsQixFQUE0QixRQUFRLGlCQUFwQyxFQUF1RCxRQUFRLFFBQS9ELEVBQXBSLENBQXJILEVBQXFkLG1CQUFtQixNQUF4ZSxFQUFnZixRQUFRLFVBQXhmLEVBQTlULEVBQW8wQixFQUFFLFVBQVUsRUFBWixFQUFnQixRQUFRLGlCQUF4QixFQUEyQyxXQUFXLENBQUMsRUFBRSxnQkFBZ0IsUUFBbEIsRUFBNEIsUUFBUSxTQUFwQyxFQUErQyxRQUFRLFFBQXZELEVBQUQsRUFBb0UsRUFBRSxnQkFBZ0IsUUFBbEIsRUFBNEIsUUFBUSxRQUFwQyxFQUE4QyxRQUFRLFFBQXRELEVBQXBFLEVBQXNJLEVBQUUsZ0JBQWdCLFNBQWxCLEVBQTZCLFFBQVEsV0FBckMsRUFBa0QsUUFBUSxTQUExRCxFQUF0SSxFQUE2TSxFQUFFLGdCQUFnQixTQUFsQixFQUE2QixRQUFRLFdBQXJDLEVBQWtELFFBQVEsU0FBMUQsRUFBN00sRUFBb1IsRUFBRSxnQkFBZ0IsUUFBbEIsRUFBNEIsUUFBUSxpQkFBcEMsRUFBdUQsUUFBUSxRQUEvRCxFQUFwUixDQUF0RCxFQUFzWixtQkFBbUIsTUFBemEsRUFBaWIsUUFBUSxVQUF6YixFQUFwMEIsRUFBMndDLEVBQUUsVUFBVSxFQUFaLEVBQWdCLFFBQVEsU0FBeEIsRUFBbUMsV0FBVyxDQUFDLEVBQUUsZ0JBQWdCLFNBQWxCLEVBQTZCLFFBQVEsRUFBckMsRUFBeUMsUUFBUSxTQUFqRCxFQUFELENBQTlDLEVBQThHLG1CQUFtQixNQUFqSSxFQUF5SSxRQUFRLFVBQWpKLEVBQTN3QyxDQUEvQjtBQUNBLE9BQUlDLE9BQU8sNENBQVg7QUFDQSxPQUFJQyxZQUFZLElBQUlILEtBQUtJLEdBQUwsQ0FBU0MsUUFBYixDQUFzQkosd0JBQXRCLEVBQWdEQyxJQUFoRCxDQUFoQjs7QUFFQUMsYUFBVUcsT0FBVixDQUFrQkMsZUFBbEIsR0FBb0NDLElBQXBDLEdBQTJDQyxJQUEzQyxDQUFnRCxVQUFVQyxTQUFWLEVBQXFCO0FBQ2xFQyxjQUFRQyxHQUFSLENBQVksbUJBQVosRUFBaUNGLFNBQWpDO0FBQ0EsYUFBT0EsU0FBUDtBQUNGLElBSEQ7QUFJRjs7a0JBRWNYLGEiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XG52YXIgaW5mdXJhTGluayA9IHByb2Nlc3MuZW52LmluZnVyYUxpbms7XG5cbmZ1bmN0aW9uIGV0aGVyZXVtUHJpY2UoKSB7XG5cbiAgIHZhciB3ZWIzID0gbmV3IFdlYjMoaW5mdXJhTGluayk7XG4gICB2YXIgYWdncmVnYXRvclYzSW50ZXJmYWNlQUJJID0gW3sgXCJpbnB1dHNcIjogW10sIFwibmFtZVwiOiBcImRlY2ltYWxzXCIsIFwib3V0cHV0c1wiOiBbeyBcImludGVybmFsVHlwZVwiOiBcInVpbnQ4XCIsIFwibmFtZVwiOiBcIlwiLCBcInR5cGVcIjogXCJ1aW50OFwiIH1dLCBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIiwgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIiB9LCB7IFwiaW5wdXRzXCI6IFtdLCBcIm5hbWVcIjogXCJkZXNjcmlwdGlvblwiLCBcIm91dHB1dHNcIjogW3sgXCJpbnRlcm5hbFR5cGVcIjogXCJzdHJpbmdcIiwgXCJuYW1lXCI6IFwiXCIsIFwidHlwZVwiOiBcInN0cmluZ1wiIH1dLCBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIiwgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIiB9LCB7IFwiaW5wdXRzXCI6IFt7IFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDgwXCIsIFwibmFtZVwiOiBcIl9yb3VuZElkXCIsIFwidHlwZVwiOiBcInVpbnQ4MFwiIH1dLCBcIm5hbWVcIjogXCJnZXRSb3VuZERhdGFcIiwgXCJvdXRwdXRzXCI6IFt7IFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDgwXCIsIFwibmFtZVwiOiBcInJvdW5kSWRcIiwgXCJ0eXBlXCI6IFwidWludDgwXCIgfSwgeyBcImludGVybmFsVHlwZVwiOiBcImludDI1NlwiLCBcIm5hbWVcIjogXCJhbnN3ZXJcIiwgXCJ0eXBlXCI6IFwiaW50MjU2XCIgfSwgeyBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIiwgXCJuYW1lXCI6IFwic3RhcnRlZEF0XCIsIFwidHlwZVwiOiBcInVpbnQyNTZcIiB9LCB7IFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDI1NlwiLCBcIm5hbWVcIjogXCJ1cGRhdGVkQXRcIiwgXCJ0eXBlXCI6IFwidWludDI1NlwiIH0sIHsgXCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50ODBcIiwgXCJuYW1lXCI6IFwiYW5zd2VyZWRJblJvdW5kXCIsIFwidHlwZVwiOiBcInVpbnQ4MFwiIH1dLCBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIiwgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIiB9LCB7IFwiaW5wdXRzXCI6IFtdLCBcIm5hbWVcIjogXCJsYXRlc3RSb3VuZERhdGFcIiwgXCJvdXRwdXRzXCI6IFt7IFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDgwXCIsIFwibmFtZVwiOiBcInJvdW5kSWRcIiwgXCJ0eXBlXCI6IFwidWludDgwXCIgfSwgeyBcImludGVybmFsVHlwZVwiOiBcImludDI1NlwiLCBcIm5hbWVcIjogXCJhbnN3ZXJcIiwgXCJ0eXBlXCI6IFwiaW50MjU2XCIgfSwgeyBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIiwgXCJuYW1lXCI6IFwic3RhcnRlZEF0XCIsIFwidHlwZVwiOiBcInVpbnQyNTZcIiB9LCB7IFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDI1NlwiLCBcIm5hbWVcIjogXCJ1cGRhdGVkQXRcIiwgXCJ0eXBlXCI6IFwidWludDI1NlwiIH0sIHsgXCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50ODBcIiwgXCJuYW1lXCI6IFwiYW5zd2VyZWRJblJvdW5kXCIsIFwidHlwZVwiOiBcInVpbnQ4MFwiIH1dLCBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIiwgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIiB9LCB7IFwiaW5wdXRzXCI6IFtdLCBcIm5hbWVcIjogXCJ2ZXJzaW9uXCIsIFwib3V0cHV0c1wiOiBbeyBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIiwgXCJuYW1lXCI6IFwiXCIsIFwidHlwZVwiOiBcInVpbnQyNTZcIiB9XSwgXCJzdGF0ZU11dGFiaWxpdHlcIjogXCJ2aWV3XCIsIFwidHlwZVwiOiBcImZ1bmN0aW9uXCIgfV07XG4gICB2YXIgYWRkciA9IFwiMHg5MzI2QkZBMDJBREQyMzY2YjMwYmFjQjEyNTI2MEFmNjQxMDMxMzMxXCI7XG4gICB2YXIgcHJpY2VGZWVkID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KGFnZ3JlZ2F0b3JWM0ludGVyZmFjZUFCSSwgYWRkcik7XG5cbiAgIHByaWNlRmVlZC5tZXRob2RzLmxhdGVzdFJvdW5kRGF0YSgpLmNhbGwoKS50aGVuKGZ1bmN0aW9uIChyb3VuZERhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTGF0ZXN0IFJvdW5kIERhdGFcIiwgcm91bmREYXRhKTtcbiAgICAgIHJldHVybiByb3VuZERhdGE7XG4gICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXRoZXJldW1QcmljZTsiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbmZpZyIsImluZnVyYUxpbmsiLCJwcm9jZXNzIiwiZW52IiwiZXRoZXJldW1QcmljZSIsIndlYjMiLCJhZ2dyZWdhdG9yVjNJbnRlcmZhY2VBQkkiLCJhZGRyIiwicHJpY2VGZWVkIiwiZXRoIiwiQ29udHJhY3QiLCJtZXRob2RzIiwibGF0ZXN0Um91bmREYXRhIiwiY2FsbCIsInRoZW4iLCJyb3VuZERhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBQ0FBLGtCQUFrQkMsTUFBbEI7QUFDQSxJQUFJQyxhQUFhQyxRQUFRQyxHQUFSLENBQVlGLFVBQTdCOztBQUVBLFNBQVNHLGFBQVQsR0FBeUI7O0FBRXRCLE9BQUlDLE9BQU8sa0JBQVNKLFVBQVQsQ0FBWDtBQUNBLE9BQUlLLDJCQUEyQixDQUFDLEVBQUUsVUFBVSxFQUFaLEVBQWdCLFFBQVEsVUFBeEIsRUFBb0MsV0FBVyxDQUFDLEVBQUUsZ0JBQWdCLE9BQWxCLEVBQTJCLFFBQVEsRUFBbkMsRUFBdUMsUUFBUSxPQUEvQyxFQUFELENBQS9DLEVBQTJHLG1CQUFtQixNQUE5SCxFQUFzSSxRQUFRLFVBQTlJLEVBQUQsRUFBNkosRUFBRSxVQUFVLEVBQVosRUFBZ0IsUUFBUSxhQUF4QixFQUF1QyxXQUFXLENBQUMsRUFBRSxnQkFBZ0IsUUFBbEIsRUFBNEIsUUFBUSxFQUFwQyxFQUF3QyxRQUFRLFFBQWhELEVBQUQsQ0FBbEQsRUFBZ0gsbUJBQW1CLE1BQW5JLEVBQTJJLFFBQVEsVUFBbkosRUFBN0osRUFBOFQsRUFBRSxVQUFVLENBQUMsRUFBRSxnQkFBZ0IsUUFBbEIsRUFBNEIsUUFBUSxVQUFwQyxFQUFnRCxRQUFRLFFBQXhELEVBQUQsQ0FBWixFQUFrRixRQUFRLGNBQTFGLEVBQTBHLFdBQVcsQ0FBQyxFQUFFLGdCQUFnQixRQUFsQixFQUE0QixRQUFRLFNBQXBDLEVBQStDLFFBQVEsUUFBdkQsRUFBRCxFQUFvRSxFQUFFLGdCQUFnQixRQUFsQixFQUE0QixRQUFRLFFBQXBDLEVBQThDLFFBQVEsUUFBdEQsRUFBcEUsRUFBc0ksRUFBRSxnQkFBZ0IsU0FBbEIsRUFBNkIsUUFBUSxXQUFyQyxFQUFrRCxRQUFRLFNBQTFELEVBQXRJLEVBQTZNLEVBQUUsZ0JBQWdCLFNBQWxCLEVBQTZCLFFBQVEsV0FBckMsRUFBa0QsUUFBUSxTQUExRCxFQUE3TSxFQUFvUixFQUFFLGdCQUFnQixRQUFsQixFQUE0QixRQUFRLGlCQUFwQyxFQUF1RCxRQUFRLFFBQS9ELEVBQXBSLENBQXJILEVBQXFkLG1CQUFtQixNQUF4ZSxFQUFnZixRQUFRLFVBQXhmLEVBQTlULEVBQW8wQixFQUFFLFVBQVUsRUFBWixFQUFnQixRQUFRLGlCQUF4QixFQUEyQyxXQUFXLENBQUMsRUFBRSxnQkFBZ0IsUUFBbEIsRUFBNEIsUUFBUSxTQUFwQyxFQUErQyxRQUFRLFFBQXZELEVBQUQsRUFBb0UsRUFBRSxnQkFBZ0IsUUFBbEIsRUFBNEIsUUFBUSxRQUFwQyxFQUE4QyxRQUFRLFFBQXRELEVBQXBFLEVBQXNJLEVBQUUsZ0JBQWdCLFNBQWxCLEVBQTZCLFFBQVEsV0FBckMsRUFBa0QsUUFBUSxTQUExRCxFQUF0SSxFQUE2TSxFQUFFLGdCQUFnQixTQUFsQixFQUE2QixRQUFRLFdBQXJDLEVBQWtELFFBQVEsU0FBMUQsRUFBN00sRUFBb1IsRUFBRSxnQkFBZ0IsUUFBbEIsRUFBNEIsUUFBUSxpQkFBcEMsRUFBdUQsUUFBUSxRQUEvRCxFQUFwUixDQUF0RCxFQUFzWixtQkFBbUIsTUFBemEsRUFBaWIsUUFBUSxVQUF6YixFQUFwMEIsRUFBMndDLEVBQUUsVUFBVSxFQUFaLEVBQWdCLFFBQVEsU0FBeEIsRUFBbUMsV0FBVyxDQUFDLEVBQUUsZ0JBQWdCLFNBQWxCLEVBQTZCLFFBQVEsRUFBckMsRUFBeUMsUUFBUSxTQUFqRCxFQUFELENBQTlDLEVBQThHLG1CQUFtQixNQUFqSSxFQUF5SSxRQUFRLFVBQWpKLEVBQTN3QyxDQUEvQjtBQUNBLE9BQUlDLE9BQU8sNENBQVg7QUFDQSxPQUFJQyxZQUFZLElBQUlILEtBQUtJLEdBQUwsQ0FBU0MsUUFBYixDQUFzQkosd0JBQXRCLEVBQWdEQyxJQUFoRCxDQUFoQjs7QUFFQUMsYUFBVUcsT0FBVixDQUFrQkMsZUFBbEIsR0FBb0NDLElBQXBDLEdBQTJDQyxJQUEzQyxDQUFnRCxVQUFVQyxTQUFWLEVBQXFCO0FBQ2xFQyxjQUFRQyxHQUFSLENBQVksbUJBQVosRUFBaUNGLFNBQWpDO0FBQ0EsYUFBT0EsU0FBUDtBQUNGLElBSEQ7QUFJRjs7a0JBRWNYLGEiLCJmaWxlIjoidW5rbm93biJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/yaomin/distributedInsuranceMVPB/pages/ethereumPrice.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/yaomin/distributedInsuranceMVPB/pages/ethereumPrice.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/ethereumPrice")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(128), "?entry"))

/***/ })

})