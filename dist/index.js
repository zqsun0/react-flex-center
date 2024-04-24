"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var clsx_1 = require("clsx");
// because the useId hook doesn't exist in react@17
// try to get the useId from 'react', if it doesn't exist, it will be undefined
var useId = require('react').useId;
/**
 * @description A flex layout component for centering content
 * @author zqsun
 * @version 5.0
 * @param {object} props - Component properties
 * @param {('horizontal' | 'vertical' | 'both')} [props.centering='both'] - Centering direction. The options are 'horizontal', 'vertical', or 'both'. The default is 'both'.
 *   - 'horizontal': Centers content horizontally
 *   - 'vertical': Centers content vertically
 *   - 'both': Centers content both horizontally and vertically
 * @param {React.ReactNode} props.children - Child elements
 * @returns {JSX.Element} - FlexCenter component
 */
function useFallbackId() {
    var idRef = (0, react_1.useRef)('');
    (0, react_1.useEffect)(function () {
        if (idRef.current == '') {
            idRef.current = 'flex-center-' + Math.random().toString(36).slice(2, 11);
        }
    }, []);
    return idRef.current;
}
var FlexCenter = (0, react_1.forwardRef)(function (_a, ref) {
    var _b = _a.centering, centering = _b === void 0 ? 'both' : _b, children = _a.children, props = __rest(_a, ["centering", "children"]);
    var id = useId ? useId() : useFallbackId();
    var getFlexStyle = function () {
        switch (centering) {
            case 'both':
                return 'FLEX_ALL_CENTER';
            case 'horizontal':
                return 'FLEX_WIDTH_CENTER';
            case 'vertical':
                return 'FLEX_HEIGHT_CENTER';
            default:
                return '';
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ id: 'FlexCenter-' + id, ref: ref }, props, { className: (0, clsx_1.clsx)(getFlexStyle(), props.className) }, { children: children })));
});
FlexCenter.displayName = 'FlexCenter';
exports.default = FlexCenter;
