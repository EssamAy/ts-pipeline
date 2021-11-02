"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pipeline = void 0;
var Pipeline = /** @class */ (function () {
    function Pipeline(data) {
        this.data = data;
        return this;
    }
    Pipeline.prototype.through = function (pipes) {
        var _this = this;
        pipes.forEach(function (pipe) {
            _this.data = pipe.handle(_this.data);
        });
        return this;
    };
    Pipeline.prototype.thenReturn = function () {
        return this.data;
    };
    return Pipeline;
}());
exports.Pipeline = Pipeline;
