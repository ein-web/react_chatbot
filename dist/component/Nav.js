"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouterDom = require("react-router-dom");
// src/components/Nav.js

function Nav() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '60px',
      background: '#ffff00',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, " ", /*#__PURE__*/React.createElement("button", {
    className: "btn_blue",
    onClick: () => {
      window.location.href = '/Home';
    }
  }, "Home"), "\xA0 \xA0 \xA0", /*#__PURE__*/React.createElement("button", {
    className: "btn_green",
    onClick: () => {
      window.location.href = '/About';
    }
  }, "About"), "\xA0 \xA0 \xA0", /*#__PURE__*/React.createElement("button", {
    className: "btn_pink",
    onClick: () => {
      window.location.href = '/View';
    }
  }, "View")));
}
var _default = exports.default = Nav;