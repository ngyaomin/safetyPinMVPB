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

var _insurancePool = require('../ethereum/insurancePool');

var _insurancePool2 = _interopRequireDefault(_insurancePool);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/yaomin/distributedInsuranceMVPB/components/FundForm.js';


var FundForm = function (_Component) {
  (0, _inherits3.default)(FundForm, _Component);

  function FundForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FundForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FundForm.__proto__ || (0, _getPrototypeOf2.default)(FundForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var insurancePool, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                insurancePool = (0, _insurancePool2.default)(_this.props.address);

                _this.setState({ loading: true, errorMessage: '' });

                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return insurancePool.methods.fund().send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.value, 'ether')
                });

              case 9:

                _routes.Router.replaceRoute('/insurancepools/' + _this.props.address);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 15:

                _this.setState({ loading: false, value: '' });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FundForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Premium to Join'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        label: 'ether',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Alamak!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Pay Premium'), _react2.default.createElement('h5', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, ' Pls ensure you have logged in and connect to metamask for this site for transactions '));
    }
  }]);

  return FundForm;
}(_react.Component);

exports.default = FundForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiRnVuZEZvcm0iLCJfQ29tcG9uZW50IiwiX3JlZiIsIl90aGlzMiIsIl90ZW1wIiwiX3RoaXMiLCJfcmV0IiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfX3Byb3RvX18iLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiX3JlZjIiLCJtYXJrIiwiX2NhbGxlZSIsImV2ZW50IiwiaW5zdXJhbmNlUG9vbCIsImFjY291bnRzIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsInNlbnQiLCJtZXRob2RzIiwiZnVuZCIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsInJlcGxhY2VSb3V0ZSIsInQwIiwibWVzc2FnZSIsInN0b3AiLCJfeCIsImtleSIsInJlbmRlciIsIl90aGlzMyIsImNyZWF0ZUVsZW1lbnQiLCJlcnJvciIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiRmllbGQiLCJvbkNoYW5nZSIsInRhcmdldCIsImxhYmVsIiwibGFiZWxQb3NpdGlvbiIsImhlYWRlciIsImNvbnRlbnQiLCJwcmltYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBTEEsSUFBSUEsZUFBZSwrREFBbkI7OztBQU9BLElBQUlDLFdBQVcsVUFBVUMsVUFBVixFQUFzQjtBQUNuQywwQkFBVUQsUUFBVixFQUFvQkMsVUFBcEI7O0FBRUEsV0FB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dEIsRUFBaEIsQ0FBUDtBQUNELFNBSndCO0FBS3pCNEMsZUFBTyxPQUxrQjtBQU16QkMsdUJBQWUsT0FOVTtBQU96QlAsa0JBQVU7QUFDUkMsb0JBQVUxRCxZQURGO0FBRVIyRCxzQkFBWTtBQUZKO0FBUGUsT0FBM0IsQ0FsQkYsQ0FQSyxFQXNDTCxnQkFBTUosYUFBTiwyQkFBNkIsRUFBRUMsT0FBTyxJQUFULEVBQWVTLFFBQVEsU0FBdkIsRUFBa0NDLFNBQVMsS0FBS2hELEtBQUwsQ0FBV0UsWUFBdEQsRUFBb0VxQyxVQUFVO0FBQ3ZHQyxvQkFBVTFELFlBRDZGO0FBRXZHMkQsc0JBQVk7QUFGMkY7QUFBOUUsT0FBN0IsQ0F0Q0ssRUEyQ0wsZ0JBQU1KLGFBQU4sMEJBRUUsRUFBRVksU0FBUyxJQUFYLEVBQWlCOUMsU0FBUyxLQUFLSCxLQUFMLENBQVdHLE9BQXJDLEVBQThDb0MsVUFBVTtBQUNwREMsb0JBQVUxRCxZQUQwQztBQUVwRDJELHNCQUFZO0FBRndDO0FBQXhELE9BRkYsRUFPRSxhQVBGLENBM0NLLEVBb0RMLGdCQUFNSixhQUFOLENBQ0UsSUFERixFQUVFO0FBQ0VFLGtCQUFVO0FBQ1JDLG9CQUFVMUQsWUFERjtBQUVSMkQsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRSx3RkFSRixDQXBESyxDQUFQO0FBK0REO0FBcEVxQixHQUFELENBQXZCOztBQXVFQSxTQUFPMUQsUUFBUDtBQUNELENBbEpjLGtCQUFmOztrQkFvSmVBLFEiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gJ2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3InO1xuaW1wb3J0IF9hc3luY1RvR2VuZXJhdG9yIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yJztcbmltcG9ydCBfT2JqZWN0JGdldFByb3RvdHlwZU9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZic7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIF9qc3hGaWxlTmFtZSA9ICcvVXNlcnMveWFvbWluL2Rpc3RyaWJ1dGVkSW5zdXJhbmNlTVZQQi9jb21wb25lbnRzL0Z1bmRGb3JtLmpzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgTWVzc2FnZSwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IEluc3VyYW5jZVBvb2wgZnJvbSAnLi4vZXRoZXJldW0vaW5zdXJhbmNlUG9vbCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL3JvdXRlcyc7XG5cbnZhciBGdW5kRm9ybSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhGdW5kRm9ybSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRnVuZEZvcm0oKSB7XG4gICAgdmFyIF9yZWYsXG4gICAgICAgIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZ1bmRGb3JtKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBGdW5kRm9ybS5fX3Byb3RvX18gfHwgX09iamVjdCRnZXRQcm90b3R5cGVPZihGdW5kRm9ybSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnLFxuICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfSwgX3RoaXMub25TdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZjIgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKGV2ZW50KSB7XG4gICAgICAgIHZhciBpbnN1cmFuY2VQb29sLCBhY2NvdW50cztcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGluc3VyYW5jZVBvb2wgPSBJbnN1cmFuY2VQb29sKF90aGlzLnByb3BzLmFkZHJlc3MpO1xuXG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJycgfSk7XG5cbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMztcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNjtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblxuICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgYWNjb3VudHMgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA5O1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnN1cmFuY2VQb29sLm1ldGhvZHMuZnVuZCgpLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogd2ViMy51dGlscy50b1dlaShfdGhpcy5zdGF0ZS52YWx1ZSwgJ2V0aGVyJylcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDk6XG5cbiAgICAgICAgICAgICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKCcvaW5zdXJhbmNlcG9vbHMvJyArIF90aGlzLnByb3BzLmFkZHJlc3MpO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAxMjtcbiAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0WydjYXRjaCddKDMpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IF9jb250ZXh0LnQwLm1lc3NhZ2UgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNTpcblxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIHZhbHVlOiAnJyB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlLCBfdGhpczIsIFtbMywgMTJdXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoX3gpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0oKSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRnVuZEZvcm0sIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBGb3JtLFxuICAgICAgICB7IG9uU3VibWl0OiB0aGlzLm9uU3VibWl0LCBlcnJvcjogISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiAzN1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBGb3JtLkZpZWxkLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDM4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDM5XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnUHJlbWl1bSB0byBKb2luJ1xuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWUsXG4gICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFiZWw6ICdldGhlcicsXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogNDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1lc3NhZ2UsIHsgZXJyb3I6IHRydWUsIGhlYWRlcjogJ0FsYW1hayEnLCBjb250ZW50OiB0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiA0OFxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgIHsgcHJpbWFyeTogdHJ1ZSwgbG9hZGluZzogdGhpcy5zdGF0ZS5sb2FkaW5nLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA0OVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ1BheSBQcmVtaXVtJ1xuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdoNScsXG4gICAgICAgICAge1xuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogNTJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgICcgUGxzIGVuc3VyZSB5b3UgaGF2ZSBsb2dnZWQgaW4gYW5kIGNvbm5lY3QgdG8gbWV0YW1hc2sgZm9yIHRoaXMgc2l0ZSBmb3IgdHJhbnNhY3Rpb25zICdcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRnVuZEZvcm07XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bmRGb3JtOyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiRnVuZEZvcm0iLCJfQ29tcG9uZW50IiwiX3JlZiIsIl90aGlzMiIsIl90ZW1wIiwiX3RoaXMiLCJfcmV0IiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfX3Byb3RvX18iLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiX3JlZjIiLCJtYXJrIiwiX2NhbGxlZSIsImV2ZW50IiwiaW5zdXJhbmNlUG9vbCIsImFjY291bnRzIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsInNlbnQiLCJtZXRob2RzIiwiZnVuZCIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsInJlcGxhY2VSb3V0ZSIsInQwIiwibWVzc2FnZSIsInN0b3AiLCJfeCIsImtleSIsInJlbmRlciIsIl90aGlzMyIsImNyZWF0ZUVsZW1lbnQiLCJlcnJvciIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiRmllbGQiLCJvbkNoYW5nZSIsInRhcmdldCIsImxhYmVsIiwibGFiZWxQb3NpdGlvbiIsImhlYWRlciIsImNvbnRlbnQiLCJwcmltYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBTEEsSUFBSUEsZUFBZSwrREFBbkI7OztBQU9BLElBQUlDLFdBQVcsVUFBVUMsVUFBVixFQUFzQjtBQUNuQywwQkFBVUQsUUFBVixFQUFvQkMsVUFBcEI7O0FBRUEsV0FB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