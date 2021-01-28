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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

var _ticker = require('./ticker');

var _ticker2 = _interopRequireDefault(_ticker);

var _deployedTo = require('../ethereum/deployedTo');

var _deployedTo2 = _interopRequireDefault(_deployedTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/yaomin/distributedInsuranceMVPB/pages/poolindex.js?entry';


var InsurancePoolIndex = function (_Component) {
  (0, _inherits3.default)(InsurancePoolIndex, _Component);

  function InsurancePoolIndex() {
    (0, _classCallCheck3.default)(this, InsurancePoolIndex);

    return (0, _possibleConstructorReturn3.default)(this, (InsurancePoolIndex.__proto__ || (0, _getPrototypeOf2.default)(InsurancePoolIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(InsurancePoolIndex, [{
    key: 'renderInsurancePools',
    value: function renderInsurancePools() {
      var items = this.props.insurancePools.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement('div', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          }, _react2.default.createElement('i', { 'class': 'hand point right outline icon', __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          }), _react2.default.createElement(_routes.Link, { route: '/insurancepools/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          }, _react2.default.createElement('b', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          }, _react2.default.createElement('mark', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          }, 'View this Pool')))), '\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0', _react2.default.createElement('i', { 'class': 'ethereum icon', __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          }), _react2.default.createElement(_routes.Link, { route: 'https://rinkeby.etherscan.io/address/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          }, _react2.default.createElement('a', { target: '_blank', __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          }, 'View in Etherscan'))),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_ticker2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('h7', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'We are not rasing any money, we are only accepting donations.', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), ' For more info email \xA0', _react2.default.createElement('a', { href: 'mailto:NG_YAO_MIN01.PT@ICHAT.SP.EDU.SG', __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('u', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'givemeyourmoney@cheatyourmoney.io')), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), 'You can also see our latest smart contract', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), _react2.default.createElement(_routes.Link, { route: 'https://rinkeby.etherscan.io/address/' + _deployedTo2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('a', { target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, '\'$', _deployedTo2.default, '\''))), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'Open Safety Pins Pools'), _react2.default.createElement(_routes.Link, { route: '/insurancepools/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create New Pool',
        icon: 'add circle' // the icon name is in document, be exact
        , primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }))), this.renderInsurancePools(), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      })));
    }
  }], [{
    key: 'getInitialProps',

    // creating a instance of class to get access to
    // static asign the function not to instance of the class but to class itself

    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var insurancePools;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedInsurancePools().call();

              case 2:
                insurancePools = _context.sent;
                return _context.abrupt('return', { insurancePools: insurancePools });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return InsurancePoolIndex;
}(_react.Component);

exports.default = InsurancePoolIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiSW5zdXJhbmNlUG9vbEluZGV4IiwiX0NvbXBvbmVudCIsIl9fcHJvdG9fXyIsImFwcGx5IiwiYXJndW1lbnRzIiwia2V5IiwidmFsdWUiLCJyZW5kZXJJbnN1cmFuY2VQb29scyIsIml0ZW1zIiwicHJvcHMiLCJpbnN1cmFuY2VQb29scyIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsInJvdXRlIiwidGFyZ2V0IiwiZmx1aWQiLCJHcm91cCIsInJlbmRlciIsImhyZWYiLCJmbG9hdGVkIiwiY29udGVudCIsImljb24iLCJwcmltYXJ5IiwiX3JlZiIsIm1hcmsiLCJfY2FsbGVlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIm1ldGhvZHMiLCJnZXREZXBsb3llZEluc3VyYW5jZVBvb2xzIiwiY2FsbCIsInNlbnQiLCJhYnJ1cHQiLCJzdG9wIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQVBBLElBQUlBLGVBQWUsaUVBQW5COzs7QUFTQSxJQUFJQyxxQkFBcUIsVUFBVUMsVUFBVixFQUFzQjtBQUM3QywwQkFBVUQsa0JBQVYsRUFBOEJDLFVBQTlCOztBQUVBLFdBQVNELGtCQUFULEdBQThCO0FBQzVCLGtDQUFnQixJQUFoQixFQUFzQkEsa0JBQXRCOztBQUVBLFdBQU8seUNBQTJCLElBQTNCLEVBQWlDLENBQUNBLG1CQUFtQkUsU0FBbkIsSUFBZ0MsOEJBQXVCRixrQkFBdkIsQ0FBakMsRUFBNkVHLEtBQTdFLENBQW1GLElB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bUIsYUFBYSxzQkFBb0JDLElBQXBCLENBQXlCLFNBQVNDLE9BQVQsR0FBbUI7QUFDckYsWUFBSXJCLGNBQUo7QUFDQSxlQUFPLHNCQUFvQnNCLElBQXBCLENBQXlCLFNBQVNDLFFBQVQsQ0FBa0JDLFFBQWxCLEVBQTRCO0FBQzFELGlCQUFPLENBQVAsRUFBVTtBQUNSLG9CQUFRQSxTQUFTQyxJQUFULEdBQWdCRCxTQUFTRSxJQUFqQztBQUNFLG1CQUFLLENBQUw7QUFDRUYseUJBQVNFLElBQVQsR0FBZ0IsQ0FBaEI7QUFDQSx1QkFBTyxrQkFBUUMsT0FBUixDQUFnQkMseUJBQWhCLEdBQTRDQyxJQUE1QyxFQUFQOztBQUVGLG1CQUFLLENBQUw7QUFDRTdCLGlDQUFpQndCLFNBQVNNLElBQTFCO0FBQ0EsdUJBQU9OLFNBQVNPLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBMEIsRUFBRS9CLGdCQUFnQkEsY0FBbEIsRUFBMUIsQ0FBUDs7QUFFRixtQkFBSyxDQUFMO0FBQ0EsbUJBQUssS0FBTDtBQUNFLHVCQUFPd0IsU0FBU1EsSUFBVCxFQUFQO0FBWEo7QUFhRDtBQUNGLFNBaEJNLEVBZ0JKWCxPQWhCSSxFQWdCSyxJQWhCTCxDQUFQO0FBaUJELE9BbkIwQyxDQUFoQyxDQUFYOztBQXFCQSxlQUFTWSxlQUFULEdBQTJCO0FBQ3pCLGVBQU9kLEtBQUsxQixLQUFMLENBQVcsSUFBWCxFQUFpQkMsU0FBakIsQ0FBUDtBQUNEOztBQUVELGFBQU91QyxlQUFQO0FBQ0QsS0EzQk07QUFQSixHQUFELENBalBKOztBQXNSQSxTQUFPM0Msa0JBQVA7QUFDRCxDQWhTd0Isa0JBQXpCOztrQkFrU2VBLGtCIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX3JlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yJztcbmltcG9ydCBfYXN5bmNUb0dlbmVyYXRvciBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvcic7XG5pbXBvcnQgX09iamVjdCRnZXRQcm90b3R5cGVPZiBmcm9tICdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbnZhciBfanN4RmlsZU5hbWUgPSAnL1VzZXJzL3lhb21pbi9kaXN0cmlidXRlZEluc3VyYW5jZU1WUEIvcGFnZXMvcG9vbGluZGV4LmpzP2VudHJ5JztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XG5pbXBvcnQgTW92ZVN0dWZmQXJvdW5kIGZyb20gJy4vdGlja2VyJztcbmltcG9ydCBkZXBsb3llZFRvIGZyb20gJy4uL2V0aGVyZXVtL2RlcGxveWVkVG8nO1xuXG52YXIgSW5zdXJhbmNlUG9vbEluZGV4ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEluc3VyYW5jZVBvb2xJbmRleCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSW5zdXJhbmNlUG9vbEluZGV4KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnN1cmFuY2VQb29sSW5kZXgpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChJbnN1cmFuY2VQb29sSW5kZXguX19wcm90b19fIHx8IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YoSW5zdXJhbmNlUG9vbEluZGV4KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSW5zdXJhbmNlUG9vbEluZGV4LCBbe1xuICAgIGtleTogJ3JlbmRlckluc3VyYW5jZVBvb2xzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySW5zdXJhbmNlUG9vbHMoKSB7XG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLnByb3BzLmluc3VyYW5jZVBvb2xzLm1hcChmdW5jdGlvbiAoYWRkcmVzcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhlYWRlcjogYWRkcmVzcyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7ICdjbGFzcyc6ICdoYW5kIHBvaW50IHJpZ2h0IG91dGxpbmUgaWNvbicsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyOFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIExpbmssXG4gICAgICAgICAgICAgIHsgcm91dGU6ICcvaW5zdXJhbmNlcG9vbHMvJyArIGFkZHJlc3MsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDMwXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgJ2InLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMzBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdtYXJrJyxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMzBcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICdWaWV3IHRoaXMgUG9vbCdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICAnXFx4QTBcXHhBMFxceEEwXFx4QTBcXHhBMFxceEEwXFx4QTBcXHhBMFxceEEwXFx4QTAnLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIHsgJ2NsYXNzJzogJ2V0aGVyZXVtIGljb24nLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogMzNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBMaW5rLFxuICAgICAgICAgICAgICB7IHJvdXRlOiAnaHR0cHM6Ly9yaW5rZWJ5LmV0aGVyc2Nhbi5pby9hZGRyZXNzLycgKyBhZGRyZXNzLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDM0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICB7IHRhcmdldDogJ19ibGFuaycsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDM1XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnVmlldyBpbiBFdGhlcnNjYW4nXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICAgIGZsdWlkOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5Hcm91cCwgeyBpdGVtczogaXRlbXMsIF9fc291cmNlOiB7XG4gICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICBsaW5lTnVtYmVyOiA0M1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBMYXlvdXQsXG4gICAgICAgIHtcbiAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgIGxpbmVOdW1iZXI6IDUxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vdmVTdHVmZkFyb3VuZCwge1xuICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgbGluZU51bWJlcjogNTRcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDU2XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2g3JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDU3XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnV2UgYXJlIG5vdCByYXNpbmcgYW55IG1vbmV5LCB3ZSBhcmUgb25seSBhY2NlcHRpbmcgZG9uYXRpb25zLicsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdicicsIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDU4XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgJyBGb3IgbW9yZSBpbmZvIGVtYWlsIFxceEEwJyxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgeyBocmVmOiAnbWFpbHRvOk5HX1lBT19NSU4wMS5QVEBJQ0hBVC5TUC5FRFUuU0cnLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDU5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICd1JyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA2MFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ2dpdmVtZXlvdXJtb25leUBjaGVhdHlvdXJtb25leS5pbydcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2JyJywge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogNjJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAnWW91IGNhbiBhbHNvIHNlZSBvdXIgbGF0ZXN0IHNtYXJ0IGNvbnRyYWN0JyxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2JyJywge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogNjVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBMaW5rLFxuICAgICAgICAgICAgICB7IHJvdXRlOiAnaHR0cHM6Ly9yaW5rZWJ5LmV0aGVyc2Nhbi5pby9hZGRyZXNzLycgKyBkZXBsb3llZFRvLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDY2XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICB7IHRhcmdldDogJ19ibGFuaycsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDY3XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnXFwnJCcsXG4gICAgICAgICAgICAgICAgZGVwbG95ZWRUbyxcbiAgICAgICAgICAgICAgICAnXFwnJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2gzJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDc1XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnT3BlbiBTYWZldHkgUGlucyBQb29scydcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBMaW5rLFxuICAgICAgICAgICAgeyByb3V0ZTogJy9pbnN1cmFuY2Vwb29scy9uZXcnLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogNzdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNzhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7XG4gICAgICAgICAgICAgICAgZmxvYXRlZDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnQ3JlYXRlIE5ldyBQb29sJyxcbiAgICAgICAgICAgICAgICBpY29uOiAnYWRkIGNpcmNsZScgLy8gdGhlIGljb24gbmFtZSBpcyBpbiBkb2N1bWVudCwgYmUgZXhhY3RcbiAgICAgICAgICAgICAgICAsIHByaW1hcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA3OVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICAgIHRoaXMucmVuZGVySW5zdXJhbmNlUG9vbHMoKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdicicsIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDg4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnInLCB7XG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA4OFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2JyJywge1xuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogODhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiAnZ2V0SW5pdGlhbFByb3BzJyxcblxuXG4gICAgLy8gY3JlYXRpbmcgYSBpbnN0YW5jZSBvZiBjbGFzcyB0byBnZXQgYWNjZXNzIHRvXG4gICAgLy8gc3RhdGljIGFzaWduIHRoZSBmdW5jdGlvbiBub3QgdG8gaW5zdGFuY2Ugb2YgdGhlIGNsYXNzIGJ1dCB0byBjbGFzcyBpdHNlbGZcblxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoKSB7XG4gICAgICAgIHZhciBpbnN1cmFuY2VQb29scztcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkSW5zdXJhbmNlUG9vbHMoKS5jYWxsKCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGluc3VyYW5jZVBvb2xzID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KCdyZXR1cm4nLCB7IGluc3VyYW5jZVBvb2xzOiBpbnN1cmFuY2VQb29scyB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUsIHRoaXMpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRJbml0aWFsUHJvcHM7XG4gICAgfSgpXG4gIH1dKTtcblxuICByZXR1cm4gSW5zdXJhbmNlUG9vbEluZGV4O1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBJbnN1cmFuY2VQb29sSW5kZXg7Il19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiSW5zdXJhbmNlUG9vbEluZGV4IiwiX0NvbXBvbmVudCIsIl9fcHJvdG9fXyIsImFwcGx5IiwiYXJndW1lbnRzIiwia2V5IiwidmFsdWUiLCJyZW5kZXJJbnN1cmFuY2VQb29scyIsIml0ZW1zIiwicHJvcHMiLCJpbnN1cmFuY2VQb29scyIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsInJvdXRlIiwidGFyZ2V0IiwiZmx1aWQiLCJHcm91cCIsInJlbmRlciIsImhyZWYiLCJmbG9hdGVkIiwiY29udGVudCIsImljb24iLCJwcmltYXJ5IiwiX3JlZiIsIm1hcmsiLCJfY2FsbGVlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIm1ldGhvZHMiLCJnZXREZXBsb3llZEluc3VyYW5jZVBvb2xzIiwiY2FsbCIsInNlbnQiLCJhYnJ1cHQiLCJzdG9wIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQVBBLElBQUlBLGVBQWUsaUVBQW5COzs7QUFTQSxJQUFJQyxxQkFBcUIsVUFBVUMsVUFBVixFQUFzQjtBQUM3QywwQkFBVUQsa0JBQVYsRUFBOEJDLFVBQTlCOztBQUVBLFdBQVNELGtCQUFULEdBQThCO0FBQzVCLGtDQUFnQixJQUFoQixFQUFzQkEsa0JBQXRCOztBQUVBLFdBQU8seUNBQTJCLElBQTNCLEVBQWlDLENBQUNBLG1CQUFtQkUsU0FBbkIsSUFBZ0MsOEJBQXVCRixrQkFBdkIsQ0FBakMsRUFBNkVHLEtBQTdFLENBQW1GLElB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