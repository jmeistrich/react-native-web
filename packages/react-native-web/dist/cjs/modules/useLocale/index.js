"use strict";

exports.__esModule = true;
exports.LocaleProvider = LocaleProvider;
exports.getLocaleDirection = getLocaleDirection;
exports.useLocaleContext = useLocaleContext;

var _react = _interopRequireWildcard(require("react"));

var _isLocaleRTL = require("./isLocaleRTL");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var defaultLocale = {
  direction: 'ltr',
  locale: 'en-US'
};
var LocaleContext = /*#__PURE__*/(0, _react.createContext)(defaultLocale);

function getLocaleDirection(locale) {
  return (0, _isLocaleRTL.isLocaleRTL)(locale) ? 'rtl' : 'ltr';
}

function LocaleProvider(props) {
  var direction = props.direction,
      locale = props.locale,
      children = props.children;
  var needsContext = direction || locale;
  return needsContext ? /*#__PURE__*/_react.default.createElement(LocaleContext.Provider, {
    children: children,
    value: {
      direction: locale ? getLocaleDirection(locale) : direction,
      locale: locale
    }
  }) : children;
}

function useLocaleContext() {
  return (0, _react.useContext)(LocaleContext);
}