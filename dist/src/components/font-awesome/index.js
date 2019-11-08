"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./font-awesome.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FontAwesome = function FontAwesome(_ref) {
  var icon = _ref.icon,
      type = _ref.type;
  return _react.default.createElement("i", {
    className: "".concat(type, " fa-").concat(icon)
  });
};

FontAwesome.defaultProps = {
  icon: 'check',
  type: 'fas'
};
FontAwesome.propTypes = {
  icon: _propTypes.default.string,
  type: _propTypes.default.string
};
var _default = FontAwesome;
exports.default = _default;

//# sourceMappingURL=index.js.map