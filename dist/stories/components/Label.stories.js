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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBgColor = exports.CustomColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Label_1 = require("../../components/Label");
exports.default = {
    title: "UI/Label",
    component: Label_1.Label,
    argTypes: {
        size: { control: "select" },
        color: { control: "select" },
        fontColor: { control: "color" },
    },
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(Label_1.Label, __assign({}, args), void 0); };
exports.Basic = Template.bind({});
exports.Basic.args = { label: "Prueba", allCaps: false };
exports.AllCaps = Template.bind({});
exports.AllCaps.args = { size: "normal", allCaps: true };
exports.Secondary = Template.bind({});
exports.Secondary.args = { size: "normal", color: "secondary" };
exports.Tertiary = Template.bind({});
exports.Tertiary.args = { size: "normal", color: "tertiary" };
exports.CustomColor = Template.bind({});
exports.CustomColor.args = { size: "h1", fontColor: "#5517ac" };
exports.CustomBgColor = Template.bind({});
exports.CustomBgColor.args = { size: "h1", fontColor: "#eeeeee", bgColor: "#000000" };
