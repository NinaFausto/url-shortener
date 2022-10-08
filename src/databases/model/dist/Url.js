"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UrlModel = exports.Url = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var Url = /** @class */ (function () {
    function Url() {
    }
    __decorate([
        typegoose_1.prop({ required: true })
    ], Url.prototype, "originUrl");
    __decorate([
        typegoose_1.prop({ required: true })
    ], Url.prototype, "urlHash");
    __decorate([
        typegoose_1.prop({ required: true })
    ], Url.prototype, "shortUrl");
    return Url;
}());
exports.Url = Url;
exports.UrlModel = typegoose_1.getModelForClass(Url);
