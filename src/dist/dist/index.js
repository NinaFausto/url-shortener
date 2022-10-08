"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MongoConnection_1 = require("./databases/MongoConnection");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
require("dotenv/config");
if (process.env.NODE_ENV !== 'test') {
    const database = new MongoConnection_1.MongoConnection;
    database.connect();
}
const api = express_1.default();
api.use(express_1.default.json());
api.use(routes_1.default);
if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT;
    api.listen(PORT, () => console.log(`listening on port ${PORT}`));
}
exports.default = api;
