'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppComponent = function (_React$Component) {
  _inherits(AppComponent, _React$Component);

  function AppComponent(props) {
    _classCallCheck(this, AppComponent);

    var _this = _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).call(this, props));

    var users = [{ name: "John Snow", year: 2003, city: "Memphis, Tennessee" }, { name: "Jean Neige", year: 1999, city: "Saint-Flour, Cantal" }, { name: 'Matheus Fernandes', year: 1981, city: 'Rio de Janeiro' }];
    _this.state = {
      users: users,
      youngest: _this.computeYoungest(users)
    };
    return _this;
  }

  _createClass(AppComponent, [{
    key: "render",
    value: function render() {
      // Question 1 & 2 : modifier les déclarations de user0Component, user1Component, user2Component
      var user0 = this.state.users[0];
      var user0Component = React.createElement(UserComponent, { userData: user0 }); /// Votre réponse ici ///

      var user1 = this.state.users[1];
      var user1Component = React.createElement(UserComponent, { userData: user1 }); /// Votre réponse ici ///

      var user2 = this.state.users[2];
      var user2Component = React.createElement(UserComponent, { userData: user2 }); /// Votre réponse ici ///

      return React.createElement(
        "section",
        null,
        React.createElement(
          "header",
          { style: { display: 'flex', fontWeight: 'bold' } },
          React.createElement(
            "div",
            { style: { width: '130px' } },
            "Name"
          ),
          React.createElement(
            "div",
            { style: { width: '230px' } },
            "City"
          ),
          React.createElement(
            "div",
            { style: { width: '130px' } },
            "Year of birth"
          )
        ),
        React.createElement(
          "section",
          { className: "users" },
          user0Component,
          user1Component,
          user2Component
        ),
        React.createElement(
          "div",
          null,
          "Youngest user: ",
          this.state.youngest.name
        )
      );
    }
  }, {
    key: "computeYoungest",
    value: function computeYoungest(users) {
      return users.reduce(function (prev, cur) {
        return cur.year > prev.year ? cur : prev;
      });
    }
  }]);

  return AppComponent;
}(React.Component);