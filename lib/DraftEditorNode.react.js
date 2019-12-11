/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 * @emails oncall+draft_js
 *
 * This is unstable and not part of the public API and should not be used by
 * production systems. This file may be update/removed without notice.
 */
'use strict';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var DraftEditorDecoratedLeaves = require("./DraftEditorDecoratedLeaves.react");

var DraftEditorLeaf = require("./DraftEditorLeaf.react");

var DraftOffsetKey = require("./DraftOffsetKey");

var Immutable = require("immutable");

var React = require("react");

var cx = require("fbjs/lib/cx");

var List = Immutable.List;

var DraftEditorNode = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DraftEditorNode, _React$Component);

  var _super = _createSuper(DraftEditorNode);

  function DraftEditorNode() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DraftEditorNode.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        block = _this$props.block,
        contentState = _this$props.contentState,
        customStyleFn = _this$props.customStyleFn,
        customStyleMap = _this$props.customStyleMap,
        decorator = _this$props.decorator,
        direction = _this$props.direction,
        forceSelection = _this$props.forceSelection,
        hasSelection = _this$props.hasSelection,
        selection = _this$props.selection,
        tree = _this$props.tree;
    var blockKey = block.getKey();
    var text = block.getText();
    var lastLeafSet = tree.size - 1;
    var children = this.props.children || tree.map(function (leafSet, ii) {
      var decoratorKey = leafSet.get('decoratorKey');
      var leavesForLeafSet = leafSet.get('leaves');
      var lastLeaf = leavesForLeafSet.size - 1;
      var Leaves = leavesForLeafSet.map(function (leaf, jj) {
        var offsetKey = DraftOffsetKey.encode(blockKey, ii, jj);
        var start = leaf.get('start');
        var end = leaf.get('end');
        return /*#__PURE__*/React.createElement(DraftEditorLeaf, {
          key: offsetKey,
          offsetKey: offsetKey,
          block: block,
          start: start,
          selection: hasSelection ? selection : null,
          forceSelection: forceSelection,
          text: text.slice(start, end),
          styleSet: block.getInlineStyleAt(start),
          customStyleMap: customStyleMap,
          customStyleFn: customStyleFn,
          isLast: decoratorKey === lastLeafSet && jj === lastLeaf
        });
      }).toArray();

      if (!decoratorKey || !decorator) {
        return Leaves;
      }

      return /*#__PURE__*/React.createElement(DraftEditorDecoratedLeaves, {
        block: block,
        children: Leaves,
        contentState: contentState,
        decorator: decorator,
        decoratorKey: decoratorKey,
        direction: direction,
        leafSet: leafSet,
        text: text,
        key: ii
      });
    }).toArray();
    return /*#__PURE__*/React.createElement("div", {
      "data-offset-key": DraftOffsetKey.encode(blockKey, 0, 0),
      className: cx({
        'public/DraftStyleDefault/block': true,
        'public/DraftStyleDefault/ltr': direction === 'LTR',
        'public/DraftStyleDefault/rtl': direction === 'RTL'
      })
    }, children);
  };

  return DraftEditorNode;
}(React.Component);

module.exports = DraftEditorNode;