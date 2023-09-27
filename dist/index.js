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
// 尝试从 'react' 中导入 useId，如果不存在则为 undefined
var useId = require('react').useId;
/**
 * @description 用于居中的 flex 布局组件
 * @author zqsun
 * @version 3.0
 * @param {object} props - 组件属性
 * @param {('row' | 'column' | 'all')} [props.direction='all'] - 居中方向，可选值为 'row'、'column' 或 'all'，默认为 'all'
 *   - 'row': 在水平方向上进行水平居中
 *   - 'column': 在垂直方向上进行垂直居中
 *   - 'all': 在水平和垂直方向上同时进行居中
 * @param {React.ReactNode} props.children - 子元素
 * @returns {JSX.Element} - FlexToCenter 组件
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
var FlexCenter = function (_a) {
    var _b = _a.direction, direction = _b === void 0 ? 'all' : _b, children = _a.children, props = __rest(_a, ["direction", "children"]);
    var id = useId ? useId() : useFallbackId();
    var getFlexStyle = function () {
        if (direction === 'all') {
            return 'FLEX_ALL_CENTER';
        }
        else if (direction === 'row') {
            return 'FLEX_WIDTH_CENTER';
        }
        else {
            return 'FLEX_HEIGHT_CENTER';
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ id: 'FlexCenter-' + id }, props, { className: (0, clsx_1.clsx)(getFlexStyle(), props.className) }, { children: children })));
};
exports.default = FlexCenter;
