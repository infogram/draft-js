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

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var React = require("react");

var cx = require("fbjs/lib/cx");

var shallowEqual = require("fbjs/lib/shallowEqual");

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
    var _this$props = this.props,
        editorState = _this$props.editorState,
        otherProps = _objectWithoutPropertiesLoose(_this$props, ["editorState"]);

    var nextEditorState = nextProps.editorState,
        nextOtherProps = _objectWithoutPropertiesLoose(nextProps, ["editorState"]);

    return editorState.getSelection().getHasFocus() !== nextEditorState.getSelection().getHasFocus() || !shallowEqual(otherProps, nextOtherProps);
  };

  _proto.render = function render() {
    var innerClassName = // We can't use joinClasses since the fbjs flow definition is wrong. Using
    // cx to concatenate is rising issues with haste internally.
    // eslint-disable-next-line fb-www/cx-concat
    cx('public/DraftEditorPlaceholder/inner') + (this.props.className != null ? " ".concat(this.props.className) : '');
    return /*#__PURE__*/React.createElement("div", {
      className: cx({
        'public/DraftEditorPlaceholder/root': true,
        'public/DraftEditorPlaceholder/hasFocus': this.props.editorState.getSelection().getHasFocus()
      })
    }, /*#__PURE__*/React.createElement("div", {
      className: innerClassName,
      id: this.props.accessibilityID,
      style: {
        whiteSpace: 'pre-wrap'
      }
    }, this.props.text));
  };

  return DraftEditorPlaceholder;
}(React.Component);

module.exports = DraftEditorPlaceholder;