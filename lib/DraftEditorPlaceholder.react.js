/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 * @emails oncall+draft_js
 */
'use strict';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var React = require("react");

var cx = require("fbjs/lib/cx");

/**
 * This component is responsible for rendering placeholder text for the
 * `DraftEditor` component.
 *
 * Override placeholder style via CSS.
 */
var DraftEditorPlaceholder = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DraftEditorPlaceholder, _React$Component);

  var _super = _createSuper(DraftEditorPlaceholder);

  function DraftEditorPlaceholder() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DraftEditorPlaceholder.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props.text !== nextProps.text || this.props.editorState.getSelection().getHasFocus() !== nextProps.editorState.getSelection().getHasFocus();
  };

  _proto.render = function render() {
    var hasFocus = this.props.editorState.getSelection().getHasFocus();
    var className = cx({
      'public/DraftEditorPlaceholder/root': true,
      'public/DraftEditorPlaceholder/hasFocus': hasFocus
    });
    var contentStyle = {
      whiteSpace: 'pre-wrap'
    };
    return /*#__PURE__*/React.createElement("div", {
      className: className
    }, /*#__PURE__*/React.createElement("div", {
      className: cx('public/DraftEditorPlaceholder/inner'),
      id: this.props.accessibilityID,
      style: contentStyle
    }, this.props.text));
  };

  return DraftEditorPlaceholder;
}(React.Component);

module.exports = DraftEditorPlaceholder;