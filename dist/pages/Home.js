"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _List = _interopRequireWildcard(require("../component/List"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
// src/pages/Home.js
function Home() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#B3E5FC'
    }
  }, /*#__PURE__*/React.createElement("h1", null, "\uD648\uD398\uC774\uC9C0\uC785\uB2C8\uB2E4"), /*#__PURE__*/React.createElement(_List.default, {
    title: "\uB9DB\uC9D1\uCD94\uCC9C",
    day: "2\uC6D4 17\uC77C \uBC1C\uD589"
  }), /*#__PURE__*/React.createElement(_List.default, {
    title: "\uC5EC\uC790\uCF54\uD2B8 \uCD94\uCC9C",
    day: "1\uC6D4 30\uC77C \uBC1C\uD589"
  }), /*#__PURE__*/React.createElement(_List.default, {
    title: "\uD30C\uC774\uC36C \uB3C5\uD559\uD559",
    day: "12\uC6D4 18\uC77C \uBC1C\uD589"
  }), /*#__PURE__*/React.createElement(_List.Modal, null));
}
var _default = exports.default = Home;