"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
exports.Modal = Modal;
exports.default = void 0;
var _react = require("react");
function List(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "basic_box, list"
  }, /*#__PURE__*/React.createElement("h4", null, props.title), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, props.day))));
}
function Modal() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, " ", /*#__PURE__*/React.createElement("h4", null, "\uC81C\uBAA9"), /*#__PURE__*/React.createElement("p", null, "\uB0A0\uC9DC"), /*#__PURE__*/React.createElement("p", null, "\uC0C1\uC138\uB0B4\uC6A9")));
}
function Button() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '480px',
      background: '#ffff00',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, " ", /*#__PURE__*/React.createElement("button", {
    className: "btn_blue"
  }, "Home"), "\xA0 \xA0 \xA0", /*#__PURE__*/React.createElement("button", {
    className: "btn_green"
  }, "About"), "\xA0 \xA0 \xA0", /*#__PURE__*/React.createElement("button", {
    className: "btn_pink"
  }, "View")));
}
var _default = exports.default = List; // 기본(default) export
// 이름 붙은(named) export