"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const start_routes_1 = __importDefault(require("./router/start.routes"));
const user_routes_1 = __importDefault(require("./router/user.routes"));
require('dotenv').config({ path: '.env' });
const api = (0, express_1.default)();
api.use(express_1.default.json());
api.use(start_routes_1.default);
api.use(user_routes_1.default);
api.listen(process.env.SERVER_PORT);
