'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _insurancePool = require('../ethereum/insurancePool');

var _insurancePool2 = _interopRequireDefault(_insurancePool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/yaomin/distributedInsuranceMVPB/components/ClaimRow.js';


var ClaimRow = function (_Component) {
  (0, _inherits3.default)(ClaimRow, _Component);

  function ClaimRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ClaimRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ClaimRow.__proto__ || (0, _getPrototypeOf2.default)(ClaimRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var insurancePool, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              insurancePool = (0, _insurancePool2.default)(_this.props.address);
              _context.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return insurancePool.methods.approveClaim(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var insurancePool, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              insurancePool = (0, _insurancePool2.default)(_this.props.address);
              _context2.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context2.sent;
              _context2.next = 6;
              return insurancePool.methods.finalizeClaim(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ClaimRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          claim = _props.claim,
          validatorsCount = _props.validatorsCount;

      var readyToFinalize = claim.validatorCount > validatorsCount / 2;

      return _react2.default.createElement(Row, {
        disabled: claim.complete,
        positive: readyToFinalize && !claim.complete,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, claim.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _web2.default.utils.fromWei(claim.value, 'ether')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, claim.claimer), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, claim.validatorCount, '/', validatorsCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, claim.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Validate this claim')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, claim.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'orange', basic: true, onClick: this.onFinalize, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Finalize this claim(as a manager)')));
    }
  }]);

  return ClaimRow;
}(_react.Component);

exports.default = ClaimRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2xhaW1Sb3ciLCJfQ29tcG9uZW50IiwiX3JlZiIsIl90aGlzMiIsIl90ZW1wIiwiX3RoaXMiLCJfcmV0IiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfX3Byb3RvX18iLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJvbkFwcHJvdmUiLCJtYXJrIiwiX2NhbGxlZSIsImluc3VyYW5jZVBvb2wiLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsInNlbnQiLCJtZXRob2RzIiwiYXBwcm92ZUNsYWltIiwiaWQiLCJzZW5kIiwiZnJvbSIsInN0b3AiLCJvbkZpbmFsaXplIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJmaW5hbGl6ZUNsYWltIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJSb3ciLCJDZWxsIiwiX3Byb3BzIiwiY2xhaW0iLCJ2YWxpZGF0b3JzQ291bnQiLCJyZWFkeVRvRmluYWxpemUiLCJ2YWxpZGF0b3JDb3VudCIsImNyZWF0ZUVsZW1lbnQiLCJkaXNhYmxlZCIsImNvbXBsZXRlIiwicG9zaXRpdmUiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwiY2xhaW1lciIsImNvbG9yIiwiYmFzaWMiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSkEsSUFBSUEsZUFBZSwrREFBbkI7OztBQU1BLElBQUlDLFdBQVcsVUFBVUMsVUFBVixFQUFzQjtBQUNuQywwQkFBVUQsUUFBVixFQUFvQkMsVUFBcEI7O0FBRUEsV0FBU0QsUUFBVCxHQUFvQjtBQUNsQixRQUFJRSxJQUFKO0FBQUEsUUFDSUMsU0FBUyxJQURiOztBQUdBLFFBQUlDLEtBQUosRUFBV0MsS0FBWCxFQUFrQkMsSUFBbEI7O0FBRUEsa0NBQWdCLElBQWhCLEVBQXNCTixRQUF0Qjs7QUFFQSxTQUFLLElBQUlPLE9BQU9DLFVBQVVDLE1BQXJCLEVBQTZCQyxPQUFPQyxNQUFNSixJQUFOLENBQXBDLEVBQWlESyxPQUFPLENBQTdELEVBQWdFQSxPQUFPTCxJQUF2RSxFQUE2RUssTUFBN0UsRUFBcUY7QUFDbkZGLFdBQUtFLElBQUwsSUFBYUosVUFBVUksSUFBVixDQUFiO0FBQ0Q7O0FBRUQsV0FBT04sUUFBUUYsU0FBU0MsUUFBUSx5Q0FBMkIsSUFBM0IsRUFBaUMsQ0FBQ0gsT0FBT0YsU0FBU2EsU0FBVCxJQUFzQiw4QkFBdUJiLFFBQXZCLENBQTlCLEVBQWdFYyxJQUFoRSxDQUFxRUMsS0FBckUsQ0FBMkViLElBQTNFLEVBQWlGLENBQUMsSUFBRCxFQUFPYyxNQUFQLENBQWNOLElBQWQsQ0FBakYsQ0FBakMsQ0FBUixFQUFpSkwsS0FBMUosR0FBa0tBLE1BQU1ZLFNBQU4sR0FBa0IsaUNBQW1CLGFBQWEsc0JBQW9CQyxJQUFwQixDQUF5QixTQUFTQyxPQUFULEdBQW1CO0FBQzdRLFVBQUlDLGFBQUosRUFBbUJDLFFBQW5CO0FBQ0EsYUFBTyxzQkFBb0JDLElBQXBCLENBQXlCLFNBQVNDLFFBQVQsQ0FBa0JDLFFBQWxCLEVBQTRCO0FBQzFELGVBQU8sQ0FBUCxFQUFVO0FBQ1Isa0JBQVFBLFNBQVNDLElBQVQsR0FBZ0JELFNBQVNFLElBQWpDO0FBQ0UsaUJBQUssQ0FBTDtBQUNFTiw4QkFBZ0IsNkJBQWNmLE1BQU1zQixLQUFOLENBQVlDLE9BQTFCLENBQWhCO0FBQ0FKLHVCQUFTRSxJQUFULEdBQWdCLENBQWhCO0FBQ0EscUJBQU8sY0FBS0csR0FBTCxDQUFTQyxXQUFULEVBQVA7O0FBRUYsaUJBQUssQ0FBTDtBQUNFVCx5QkFBV0csU0FBU08sSUFBcEI7QUFDQVAsdUJBQVNFLElBQVQsR0FBZ0IsQ0FBaEI7QUFDQSxxQkFBT04sY0FBY1ksT0FBZCxDQUFzQkMsWUFBdEIsQ0FBbUM1QixNQUFNc0IsS0FBTixDQUFZTyxFQUEvQyxFQUFtREMsSUFBbkQsQ0FBd0Q7QUFDN0RDLHNCQUFNZixTQUFTLENBQVQ7QUFEdUQsZUFBeEQsQ0FBUDs7QUFJRixpQkFBSyxDQUFMO0FBQ0EsaUJBQUssS0FBTDtBQUNFLHFCQUFPRyxTQUFTYSxJQUFULEVBQVA7QUFmSjtBQWlCRDtBQUNGLE9BcEJNLEVBb0JKbEIsT0FwQkksRUFvQktoQixNQXBCTCxDQUFQO0FBcUJELEtBdkJrTyxDQUFoQyxDQUFwTCxFQXVCVkUsTUFBTWlDLFVBQU4sR0FBbUIsaUNBQW1CLGFBQWEsc0JBQW9CcEIsSUFBcEIsQ0FBeUIsU0FBU3FCLFFBQVQsR0FBb0I7QUFDbkcsVUFBSW5CLGFBQUosRUFBbUJDLFFBQW5CO0FBQ0EsYUFBTyxzQkFBb0JDLElBQXBCLENBQXlCLFNBQVNrQixTQUFULENBQW1CQyxTQUFuQixFQUE4QjtBQUM1RCxlQUFPLENBQVAsRUFBVTtBQUNSLGtCQUFRQSxVQUFVaEIsSUFBVixHQUFpQmdCLFVBQVVmLElBQW5DO0FBQ0UsaUJBQUssQ0FBTDtBQUNFTiw4QkFBZ0IsNkJBQWNmLE1BQU1zQixLQUFOLENBQVlDLE9BQTFCLENBQWhCO0FBQ0FhLHdCQUFVZixJQUFWLEdBQWlCLENBQWpCO0FBQ0EscUJBQU8sY0FBS0csR0FBTCxDQUFTQyxXQUFULEVBQVA7O0FBRUYsaUJBQUssQ0FBTDtBQUNFVCx5QkFBV29CLFVBQVVWLElBQXJCO0FBQ0FVLHdCQUFVZixJQUFWLEdBQWlCLENBQWpCO0FBQ0EscUJBQU9OLGNBQWNZLE9BQWQsQ0FBc0JVLGFBQXRCLENBQW9DckMsTUFBTXNCLEtBQU4sQ0FBWU8sRUFBaEQsRUFBb0RDLElBQXBELENBQXlEO0FBQzlEQyxzQkFBTWYsU0FBUyxDQUFUO0FBRHdELGVBQXpELENBQVA7O0FBSUYsaUJBQUssQ0FBTDtBQUNBLGlCQUFLLEtBQUw7QUFDRSxxQkFBT29CLFVBQVVKLElBQVYsRUFBUDtBQWZKO0FBaUJEO0FBQ0YsT0FwQk0sRUFvQkpFLFFBcEJJLEVBb0JNcEMsTUFwQk4sQ0FBUDtBQXFCRCxLQXZCdUQsQ0FBaEMsQ0F2QlQsRUE4Q1ZDLEtBOUNFLEdBOENNLHlDQUEyQkMsS0FBM0IsRUFBa0NDLElBQWxDLENBOUNiO0FBK0NEOztBQUVELDZCQUFhTixRQUFiLEVBQXVCLENBQUM7QUFDdEIyQyxTQUFLLFFBRGlCO0FBRXRCQyxXQUFPLFNBQVNDLE1BQVQsR0FBa0I7QUFDdkIsVUFBSUMsTUFBTSx1QkFBTUEsR0FBaEI7QUFBQSxVQUNJQyxPQUFPLHVCQUFNQSxJQURqQjtBQUVBLFVBQUlDLFNBQVMsS0FBS3JCLEtBQWxCO0FBQUEsVUFDSU8sS0FBS2MsT0FBT2QsRUFEaEI7QUFBQSxVQUVJZSxRQUFRRCxPQUFPQyxLQUZuQjtBQUFBLFVBR0lDLGtCQUFrQkYsT0FBT0UsZUFIN0I7O0FBS0EsVUFBSUMsa0JBQWtCRixNQUFNRyxjQUFOLEdBQXVCRixrQkFBa0IsQ0FBL0Q7O0FBRUEsYUFBTyxnQkFBTUcsYUFBTixDQUNMUCxHQURLLEVBRUw7QUFDRVEsa0JBQVVMLE1BQU1NLFFBRGxCO0FBRUVDLGtCQUFVTCxtQkFBbUIsQ0FBQ0YsTUFBTU0sUUFGdEM7QUFHRUUsa0JBQVU7QUFDUkMsb0JBQVUzRCxZQURGO0FBRVI0RCxzQkFBWTtBQUZKO0FBSFosT0FGSyxFQVVMLGdCQUFNTixhQUFOLENBQ0VOLElBREYsRUFFRTtBQUNFVSxrQkFBVTtBQUNSQyxvQkFBVTNELFlBREY7QUFFUjRELHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUV6QixFQVJGLENBVkssRUFvQkwsZ0JBQU1tQixhQUFOLENBQ0VOLElBREYsRUFFRTtBQUNFVSxrQkFBVTtBQUNSQyxvQkFBVTNELFlBREY7QUFFUjRELHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUVWLE1BQU1XLFdBUlIsQ0FwQkssRUE4QkwsZ0JBQU1QLGFBQU4sQ0FDRU4sSUFERixFQUVFO0FBQ0VVLGtCQUFVO0FBQ1JDLG9CQUFVM0QsWUFERjtBQUVSNEQsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRSxjQUFLRSxLQUFMLENBQVdDLE9BQVgsQ0FBbUJiLE1BQU1MLEtBQXpCLEVBQWdDLE9BQWhDLENBUkYsQ0E5QkssRUF3Q0wsZ0JBQU1TLGFBQU4sQ0FDRU4sSUFERixFQUVFO0FBQ0VVLGtCQUFVO0FBQ1JDLG9CQUFVM0QsWUFERjtBQUVSNEQsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRVYsTUFBTWMsT0FSUixDQXhDSyxFQWtETCxnQkFBTVYsYUFBTixDQUNFTixJQURGLEVBRUU7QUFDRVUsa0JBQVU7QUFDUkMsb0JBQVUzRCxZQURGO0FBRVI0RCxzQkFBWTtBQUZKO0FBRFosT0FGRixFQVFFVixNQUFNRyxjQVJSLEVBU0UsR0FURixFQVVFRixlQVZGLENBbERLLEVBOERMLGdCQUFNRyxhQUFOLENBQ0VOLElBREYsRUFFRTtBQUNFVSxrQkFBVTtBQUNSQyxvQkFBVTNELFlBREY7QUFFUjRELHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUVWLE1BQU1NLFFBQU4sR0FBaUIsSUFBakIsR0FBd0IsZ0JBQU1GLGFBQU4sMEJBRXRCLEVBQUVXLE9BQU8sT0FBVCxFQUFrQkMsT0FBTyxJQUF6QixFQUErQkMsU0FBUyxLQUFLakQsU0FBN0MsRUFBd0R3QyxVQUFVO0FBQzlEQyxvQkFBVTNELFlBRG9EO0FBRTlENEQsc0JBQVk7QUFGa0Q7QUFBbEUsT0FGc0IsRUFPdEIscUJBUHNCLENBUjFCLENBOURLLEVBZ0ZMLGdCQUFNTixhQUFOLENBQ0VOLElBREYsRUFFRTtBQUNFVSxrQkFBVTtBQUNSQyxvQkFBVTNELFlBREY7QUFFUjRELHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUVWLE1BQU1NLFFBQU4sR0FBaUIsSUFBakIsR0FBd0IsZ0JBQU1GLGFBQU4sMEJBRXRCLEVBQUVXLE9BQU8sUUFBVCxFQUFtQkMsT0FBTyxJQUExQixFQUFnQ0MsU0FBUyxLQUFLNUIsVUFBOUMsRUFBMERtQixVQUFVO0FBQ2hFQyxvQkFBVTNELFlBRHNEO0FBRWhFNEQsc0JBQVk7QUFGb0Q7QUFBcEUsT0FGc0IsRUFPdEIsbUNBUHNCLENBUjFCLENBaEZLLENBQVA7QUFtR0Q7QUEvR3FCLEdBQUQsQ0FBdkI7O0FBa0hBLFNBQU8zRCxRQUFQO0FBQ0QsQ0FuTGMsa0JBQWY7O2tCQXFMZUEsUSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAnYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvcic7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3InO1xuaW1wb3J0IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX2pzeEZpbGVOYW1lID0gJy9Vc2Vycy95YW9taW4vZGlzdHJpYnV0ZWRJbnN1cmFuY2VNVlBCL2NvbXBvbmVudHMvQ2xhaW1Sb3cuanMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRhYmxlLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCBJbnN1cmFuY2VQb29sIGZyb20gJy4uL2V0aGVyZXVtL2luc3VyYW5jZVBvb2wnO1xuXG52YXIgQ2xhaW1Sb3cgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ2xhaW1Sb3csIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENsYWltUm93KCkge1xuICAgIHZhciBfcmVmLFxuICAgICAgICBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDbGFpbVJvdyk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gQ2xhaW1Sb3cuX19wcm90b19fIHx8IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YoQ2xhaW1Sb3cpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5vbkFwcHJvdmUgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgdmFyIGluc3VyYW5jZVBvb2wsIGFjY291bnRzO1xuICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgaW5zdXJhbmNlUG9vbCA9IEluc3VyYW5jZVBvb2woX3RoaXMucHJvcHMuYWRkcmVzcyk7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzO1xuICAgICAgICAgICAgICByZXR1cm4gd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICBhY2NvdW50cyA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA2O1xuICAgICAgICAgICAgICByZXR1cm4gaW5zdXJhbmNlUG9vbC5tZXRob2RzLmFwcHJvdmVDbGFpbShfdGhpcy5wcm9wcy5pZCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBfY2FsbGVlLCBfdGhpczIpO1xuICAgIH0pKSwgX3RoaXMub25GaW5hbGl6ZSA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyKCkge1xuICAgICAgdmFyIGluc3VyYW5jZVBvb2wsIGFjY291bnRzO1xuICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIGluc3VyYW5jZVBvb2wgPSBJbnN1cmFuY2VQb29sKF90aGlzLnByb3BzLmFkZHJlc3MpO1xuICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDM7XG4gICAgICAgICAgICAgIHJldHVybiB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIGFjY291bnRzID0gX2NvbnRleHQyLnNlbnQ7XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gNjtcbiAgICAgICAgICAgICAgcmV0dXJuIGluc3VyYW5jZVBvb2wubWV0aG9kcy5maW5hbGl6ZUNsYWltKF90aGlzLnByb3BzLmlkKS5zZW5kKHtcbiAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBfY2FsbGVlMiwgX3RoaXMyKTtcbiAgICB9KSksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENsYWltUm93LCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBSb3cgPSBUYWJsZS5Sb3csXG4gICAgICAgICAgQ2VsbCA9IFRhYmxlLkNlbGw7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpZCA9IF9wcm9wcy5pZCxcbiAgICAgICAgICBjbGFpbSA9IF9wcm9wcy5jbGFpbSxcbiAgICAgICAgICB2YWxpZGF0b3JzQ291bnQgPSBfcHJvcHMudmFsaWRhdG9yc0NvdW50O1xuXG4gICAgICB2YXIgcmVhZHlUb0ZpbmFsaXplID0gY2xhaW0udmFsaWRhdG9yQ291bnQgPiB2YWxpZGF0b3JzQ291bnQgLyAyO1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgUm93LFxuICAgICAgICB7XG4gICAgICAgICAgZGlzYWJsZWQ6IGNsYWltLmNvbXBsZXRlLFxuICAgICAgICAgIHBvc2l0aXZlOiByZWFkeVRvRmluYWxpemUgJiYgIWNsYWltLmNvbXBsZXRlLFxuICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgbGluZU51bWJlcjogMzFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgQ2VsbCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAzNVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaWRcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBDZWxsLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDM2XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFpbS5kZXNjcmlwdGlvblxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIENlbGwsXG4gICAgICAgICAge1xuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogMzdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHdlYjMudXRpbHMuZnJvbVdlaShjbGFpbS52YWx1ZSwgJ2V0aGVyJylcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBDZWxsLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDM4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFpbS5jbGFpbWVyXG4gICAgICAgICksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgQ2VsbCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAzOVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xhaW0udmFsaWRhdG9yQ291bnQsXG4gICAgICAgICAgJy8nLFxuICAgICAgICAgIHZhbGlkYXRvcnNDb3VudFxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIENlbGwsXG4gICAgICAgICAge1xuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogNDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsYWltLmNvbXBsZXRlID8gbnVsbCA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICB7IGNvbG9yOiAnZ3JlZW4nLCBiYXNpYzogdHJ1ZSwgb25DbGljazogdGhpcy5vbkFwcHJvdmUsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA0MlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ1ZhbGlkYXRlIHRoaXMgY2xhaW0nXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIENlbGwsXG4gICAgICAgICAge1xuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogNDdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsYWltLmNvbXBsZXRlID8gbnVsbCA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICB7IGNvbG9yOiAnb3JhbmdlJywgYmFzaWM6IHRydWUsIG9uQ2xpY2s6IHRoaXMub25GaW5hbGl6ZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQ5XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnRmluYWxpemUgdGhpcyBjbGFpbShhcyBhIG1hbmFnZXIpJ1xuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2xhaW1Sb3c7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IENsYWltUm93OyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2xhaW1Sb3ciLCJfQ29tcG9uZW50IiwiX3JlZiIsIl90aGlzMiIsIl90ZW1wIiwiX3RoaXMiLCJfcmV0IiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfX3Byb3RvX18iLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJvbkFwcHJvdmUiLCJtYXJrIiwiX2NhbGxlZSIsImluc3VyYW5jZVBvb2wiLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsInNlbnQiLCJtZXRob2RzIiwiYXBwcm92ZUNsYWltIiwiaWQiLCJzZW5kIiwiZnJvbSIsInN0b3AiLCJvbkZpbmFsaXplIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJmaW5hbGl6ZUNsYWltIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJSb3ciLCJDZWxsIiwiX3Byb3BzIiwiY2xhaW0iLCJ2YWxpZGF0b3JzQ291bnQiLCJyZWFkeVRvRmluYWxpemUiLCJ2YWxpZGF0b3JDb3VudCIsImNyZWF0ZUVsZW1lbnQiLCJkaXNhYmxlZCIsImNvbXBsZXRlIiwicG9zaXRpdmUiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwiY2xhaW1lciIsImNvbG9yIiwiYmFzaWMiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSkEsSUFBSUEsZUFBZSwrREFBbkI7OztBQU1BLElBQUlDLFdBQVcsVUFBVUMsVUFBVixFQUFzQjtBQUNuQywwQkFB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QU4sQ0FDRU4sSUFERixFQUVFO0FBQ0VVLGtCQUFVO0FBQ1JDLG9CQUFVM0QsWUFERjtBQUVSNEQsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRSxjQUFLRSxLQUFMLENBQVdDLE9BQVgsQ0FBbUJiLE1BQU1MLEtBQXpCLEVBQWdDLE9BQWhDLENBUkYsQ0E5QkssRUF3Q0wsZ0JBQU1TLGFBQU4sQ0FDRU4sSUFERixFQUVFO0FBQ0VVLGtCQUFVO0FBQ1JDLG9CQUFVM0QsWUFERjtBQUVSNEQsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRVYsTUFBTWMsT0FSUixDQXhDSyxFQWtETCxnQkFBTVYsYUFBTixDQUNFTixJQURGLEVBRUU7QUFDRVUsa0JBQVU7QUFDUkMsb0JBQVUzRCxZQURGO0FBRVI0RCxzQkFBWTtBQUZKO0FBRFosT0FGRixFQVFFVixNQUFNRyxjQVJSLEVBU0UsR0FURixFQVVFRixlQVZGLENBbERLLEVBOERMLGdCQUFNRyxhQUFOLENBQ0VOLElBREYsRUFFRTtBQUNFVSxrQkFBVTtBQUNSQyxvQkFBVTNELFlBREY7QUFFUjRELHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUVWLE1BQU1NLFFBQU4sR0FBaUIsSUFBakIsR0FBd0IsZ0JBQU1GLGFBQU4sMEJBRXRCLEVBQUVXLE9BQU8sT0FBVCxFQUFrQkMsT0FBTyxJQUF6QixFQUErQkMsU0FBUyxLQUFLakQsU0FBN0MsRUFBd0R3QyxVQUFVO0FBQzlEQyxvQkFBVTNELFlBRG9EO0FBRTlENEQsc0JBQVk7QUFGa0Q7QUFBbEUsT0FGc0IsRUFPdEIscUJBUHNCLENBUjFCLENBOURLLEVBZ0ZMLGdCQUFNTixhQUFOLENBQ0VOLElBREYsRUFFRTtBQUNFVSxrQkFBVTtBQUNSQyxvQkFBVTNELFlBREY7QUFFUjRELHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUVWLE1BQU1NLFFBQU4sR0FBaUIsSUFBakIsR0FBd0IsZ0JBQU1GLGFBQU4sMEJBRXRCLEVBQUVXLE9BQU8sUUFBVCxFQUFtQkMsT0FBTyxJQUExQixFQUFnQ0MsU0FBUyxLQUFLNUIsVUFBOUMsRUFBMERtQixVQUFVO0FBQ2hFQyxvQkFBVTNELFlBRHNEO0FBRWhFNEQsc0JBQVk7QUFGb0Q7QUFBcEUsT0FGc0IsRUFPdEIsbUNBUHNCLENBUjFCLENBaEZLLENBQVA7QUFtR0Q7QUEvR3FCLEdBQUQsQ0FBdkI7O0FBa0hBLFNBQU8zRCxRQUFQO0FBQ0QsQ0FuTGMsa0JBQWY7O2tCQXFMZUEsUSIsImZpbGUiOiJ1bmtub3duIn0=