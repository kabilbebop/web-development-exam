'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserComponent = function (_React$Component) {
  _inherits(UserComponent, _React$Component);

  function UserComponent(props) {
    _classCallCheck(this, UserComponent);

    return _possibleConstructorReturn(this, (UserComponent.__proto__ || Object.getPrototypeOf(UserComponent)).call(this, props));
  }

  _createClass(UserComponent, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Question 1
      var _props$userData = this.props.userData,
          name = _props$userData.name,
          city = _props$userData.city,
          year = _props$userData.year;

      return React.createElement(
        'div',
        { style: { display: 'flex' } },
        React.createElement(
          'div',
          { className: 'name', style: { width: '130px' } },
          name
        ),
        React.createElement(
          'div',
          { className: 'city', style: { width: '230px' } },
          year
        ),
        React.createElement(
          'div',
          { className: 'age', style: { width: '130px' } },
          city
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.props.addYear();
            } },
          'Add year'
        )
      );
    }
  }]);

  return UserComponent;
}(React.Component);