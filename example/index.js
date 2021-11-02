"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveScriptTags = exports.ReplaceLinkTags = exports.RemoveBadWords = void 0;
var __1 = require("../");
var RemoveBadWords = /** @class */ (function () {
    function RemoveBadWords() {
    }
    RemoveBadWords.prototype.handle = function (data) {
        data += "bb";
        return data;
    };
    return RemoveBadWords;
}());
exports.RemoveBadWords = RemoveBadWords;
var ReplaceLinkTags = /** @class */ (function () {
    function ReplaceLinkTags() {
    }
    ReplaceLinkTags.prototype.handle = function (data) {
        data += "ll";
        return data;
    };
    return ReplaceLinkTags;
}());
exports.ReplaceLinkTags = ReplaceLinkTags;
var RemoveScriptTags = /** @class */ (function () {
    function RemoveScriptTags() {
    }
    RemoveScriptTags.prototype.handle = function (data) {
        data += "ss";
        return data;
    };
    return RemoveScriptTags;
}());
exports.RemoveScriptTags = RemoveScriptTags;
test();
function test() {
    var content = "a";
    content = new __1.Pipeline(content)
        .through([
        new RemoveBadWords(),
        new ReplaceLinkTags(),
        new RemoveScriptTags()
    ])
        .thenReturn();
    console.log('data', content);
}
