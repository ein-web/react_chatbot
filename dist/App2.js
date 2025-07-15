"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
require("./App.css");
var _List = _interopRequireWildcard(require("./component/List"));
var _Nav = _interopRequireDefault(require("./component/Nav"));
var _Home = _interopRequireDefault(require("./pages/Home"));
var _About = _interopRequireDefault(require("./pages/About"));
var _View = _interopRequireDefault(require("./pages/View"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function App() {
  return /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement(_Nav.default, null), " ", /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_Home.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/about",
    element: /*#__PURE__*/React.createElement(_About.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/View",
    element: /*#__PURE__*/React.createElement(_View.default, null)
  })));
}
var _default = exports.default = App;