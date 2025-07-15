"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
require("./App.css");
var _Nav = _interopRequireDefault(require("./component/Nav"));
var _Home = _interopRequireDefault(require("./pages/Home"));
var _About = _interopRequireDefault(require("./pages/About"));
var _View = _interopRequireDefault(require("./pages/View"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function App() {
  let post = "reAct Blog"; // 자료 잠깐 저장할때 변수
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("div", {
    className: "App-header"
  }, /*#__PURE__*/React.createElement("h4", null, post)), /*#__PURE__*/React.createElement(_Nav.default, null), " "), /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/Home",
    element: /*#__PURE__*/React.createElement(_Home.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/about",
    element: /*#__PURE__*/React.createElement(_About.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/View",
    element: /*#__PURE__*/React.createElement(_View.default, null)
  }))));
}
var _default = exports.default = App;