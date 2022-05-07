"use strict";

exports.__esModule = true;
exports.default = createCSSStyleSheet;

var _ExecutionEnvironment = _interopRequireDefault(require("fbjs/lib/ExecutionEnvironment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var canUseDOM = _ExecutionEnvironment.default.canUseDOM; // $FlowFixMe: HTMLStyleElement is incorrectly typed - https://github.com/facebook/flow/issues/2696

function createCSSStyleSheet(id, rootNode, textContent) {
  if (canUseDOM) {
    var root = rootNode != null ? rootNode : document;
    var element = root.getElementById(id);

    if (element == null) {
      element = document.createElement('style');
      element.setAttribute('id', id);

      if (typeof textContent === 'string') {
        element.appendChild(document.createTextNode(textContent));
      }

      if (root instanceof ShadowRoot) {
        root.insertBefore(element, root.firstChild);
      } else {
        var head = root.head;

        if (head) {
          head.insertBefore(element, head.firstChild);
        }
      }
    } // $FlowFixMe: HTMLElement is incorrectly typed


    return element.sheet;
  } else {
    return null;
  }
}

module.exports = exports.default;