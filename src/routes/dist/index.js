"use strict";
exports.__esModule = true;
var express_1 = require("express");
var Url_1 = require("../controllers/Url");
var url = new Url_1["default"]();
var routes = express_1.Router();
routes.post('/shorten', url.shorten);
routes.get('/:urlHash', url.redirect);
exports["default"] = routes;
