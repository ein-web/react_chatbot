"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./App.css");
var _react = require("react");
function App() {
  let post = "reAct Blog"; // 자료 잠깐 저장할때 변수
  let [글제목, 글제목변경] = (0, _react.useState)(['맛집추천', '남자 코트 추천', '파이썬 독학']);
  function 가나다정렬() {
    const sorted = [...글제목].sort();
    글제목변경(sorted);
  }
  let [좋아요, 좋아요변경] = (0, _react.useState)(0);
  function count() {
    console.log(1);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("div", {
    className: "board_box",
    style: {
      display: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "List_box"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", {
    className: "more_line"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    target: "_self",
    title: "\uB354\uBCF4\uAE30"
  }, "\uB354\uBCF4\uAE30")), /*#__PURE__*/React.createElement("li", {
    className: "clear"
  }), /*#__PURE__*/React.createElement("li", {
    className: "text_line"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    target: "_self"
  }, "[\uACF5\uC9C0] \uD658\uACBD\uC778\uC99D(\uC790\uB3D9\uCC28\uBD84\uC57C) \uAD00\uB828 \uC131\uC801\uC11C \uC704/\uBCC0\uC870 \uBC29\uC9C0 \uAC04\uB2F4\uD68C \uCC38\uC11D \uC694\uCCAD")), /*#__PURE__*/React.createElement("li", {
    className: "text_line"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    target: "_self"
  }, "[\uACF5\uC9C0] \uD658\uACBD\uC778\uC99D \uAD00\uB828 \uAC04\uB2F4\uD68C \uCC38\uC11D \uC694\uCCAD")), /*#__PURE__*/React.createElement("li", {
    className: "text_line"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    target: "_self"
  }, "[\uACF5\uC9C0] 11/3(\uAE08) \uAD50\uD1B5\uD658\uACBD\uC5F0\uAD6C\uC18C \uCD94\uACC4 \uCCB4\uC721\uD589\uC0AC \uC548\uB0B4")), /*#__PURE__*/React.createElement("li", {
    className: "text_line"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    target: "_self"
  }, "[\uC548\uB0B4] \uAC1C\uBCC4\uC778\uC99D\uC11C \uC801\uC6A9 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC5C5\uB370\uC774\uD2B8 \uC54C\uB9BC\uBB3C \uBCC0\uD638\uC0AC\uB4E4\uC774 \uC787\uB2EC\uC544 \uC190\uC0AC\uB798\uB97C \uCE58\uACE0 \uC788\uAE30 \uB54C\uBB38\uC774\uB77C\uB294 \uC124\uBA85\uC774\uB2E4.")), /*#__PURE__*/React.createElement("li", {
    className: "text_line"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    target: "_self"
  }, "\uAE40 \uBD80\uCD1D\uB9AC\uB294 5\uC77C \uC624\uD6C4\uC5D0\uB294 \uAE34\uAE09 \uB300\uC678\uD1B5\uC0C1\uC7A5\uAD00\uD68C\uC758\uB97C \uAC1C\uCD5C\uD588\uB2E4. \uAE40 \uBD80\uCD1D\uB9AC\uAC00 \uC8FC\uC7AC\uD558\uACE0 \uC678\uAD50\uBD80, \uC0B0\uC5C5\uD1B5\uC0C1\uC790\uC6D0\uBD80, \uBCF4\uAC74\uBCF5\uC9C0\uBD80, \uD658\uACBD\uBD80, \uAD6D\uD1A0\uAD50\uD1B5\uBD80 \uC7A5\uCC28\uAD00\uACFC \uD1B5\uC0C1\uAD50\uC12D\uBCF8\uBD80\uC7A5")), /*#__PURE__*/React.createElement("li", {
    className: "text_line"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    target: "_self"
  }, "\uB514\uC9C0\uD138\uC6D0\uD328\uC2A4, \uBAA8\uBC14\uC77C\uC778\uC99D \uC911\uB2E8\uC791\uC5C5 \uC548\uB0B4"))))), /*#__PURE__*/React.createElement("div", {
    className: "App-header"
  }, /*#__PURE__*/React.createElement("h4", null, post)), /*#__PURE__*/React.createElement("button", {
    className: "btn_blue",
    onClick: () => {
      글제목변경(['맛집추천', '여자 코트 추천', '파이썬 독학']);
    }
  }, "\uC5EC\uC790"), "\xA0\xA0\xA0", /*#__PURE__*/React.createElement("button", {
    className: "btn_green",
    onClick: () => {
      let copy = [...글제목];
      copy[0] = '데이트 추천';
      글제목변경(copy);
    }
  }, "\uB370\uC774\uD2B8"), "\xA0\xA0\xA0", /*#__PURE__*/React.createElement("button", {
    className: "btn_pink",
    onClick: 가나다정렬
  }, "\uAC00\uB098\uB2E4"), /*#__PURE__*/React.createElement("div", {
    className: "list"
  }, /*#__PURE__*/React.createElement("h4", null, 글제목[0], /*#__PURE__*/React.createElement("span", {
    onClick: count => {
      좋아요변경(좋아요 + 1);
    },
    style: {
      paddingLeft: "8px",
      cursor: "pointer"
    }
  }, "\uD83D\uDC4D"), " ", /*#__PURE__*/React.createElement("span", {
    className: "tx_point"
  }, 좋아요), " "), /*#__PURE__*/React.createElement("p", null, "2\uC6D4 17\uC77C \uBC1C\uD589")), /*#__PURE__*/React.createElement("div", {
    className: "list"
  }, /*#__PURE__*/React.createElement("h4", null, 글제목[1]), /*#__PURE__*/React.createElement("p", null, "2\uC6D4 17\uC77C \uBC1C\uD589")), /*#__PURE__*/React.createElement("div", {
    className: "list"
  }, /*#__PURE__*/React.createElement("h4", null, 글제목[2]), /*#__PURE__*/React.createElement("p", null, "2\uC6D4 17\uC77C \uBC1C\uD589")), /*#__PURE__*/React.createElement(Modal, null), /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("div", {
    className: "App-header"
  }, /*#__PURE__*/React.createElement("h4", null, post)), /*#__PURE__*/React.createElement(List, {
    title: "\uB9DB\uC9D1\uCD94\uCC9C",
    day: "2\uC6D4 17\uC77C \uBC1C\uD589"
  }), /*#__PURE__*/React.createElement(List, {
    title: "\uC5EC\uC790\uCF54\uD2B8 \uCD94\uCC9C",
    day: "1\uC6D4 30\uC77C \uBC1C\uD589"
  }), /*#__PURE__*/React.createElement(List, {
    title: "\uD30C\uC774\uC36C \uB3C5\uD559\uD559",
    day: "12\uC6D4 18\uC77C \uBC1C\uD589"
  }), /*#__PURE__*/React.createElement(Modal, null), /*#__PURE__*/React.createElement(Button, null)));
}
{/*컴퍼넌트 만들때 */}
function Modal() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("h4", null, "\uC81C\uBAA9"), /*#__PURE__*/React.createElement("p", null, "\uB0A0\uC9DC"), /*#__PURE__*/React.createElement("p", null, "\uC0C1\uC138\uB0B4\uC6A9")), /*#__PURE__*/React.createElement("div", null, " ")) // 하나의 div에서만 만듬 몸통역할
  ;
}
var _default = exports.default = App;