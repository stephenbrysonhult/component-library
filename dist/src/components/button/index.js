"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hultCareermapper = _interopRequireDefault(require("@bit/hult.careermapper.font-awesome"));

require("@bit/hult.careermapper.assets/scss/_typography.scss");

require("./button.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Button = function Button(_ref) {
  var Wrapper = _ref.Wrapper,
      wrapperProps = _ref.wrapperProps,
      label = _ref.label,
      icon = _ref.icon,
      className = _ref.className;
  return _react.default.createElement(Wrapper, _extends({}, wrapperProps, {
    className: "button ".concat(className)
  }), _react.default.createElement("span", {
    className: "button__label"
  }, label), icon && _react.default.createElement(_hultCareermapper.default, {
    icon: icon,
    type: "far"
  }));
};

Button.defaultProps = {
  Wrapper: 'div',
  wrapperProps: {},
  label: 'Button label',
  icon: 'check',
  className: ''
};
Button.propTypes = {
  Wrapper: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node, _propTypes.default.func]),
  wrapperProps: _propTypes.default.shape({}),
  label: _propTypes.default.string,
  icon: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = Button;
exports.default = _default;

//# sourceMappingURL=index.js.map