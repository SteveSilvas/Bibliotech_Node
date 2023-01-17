"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const StartRoute = (0, express_1.Router)();
StartRoute.get('/start', (req, res, next) => {
    const message = "Teste de Rotas com sucesso.";
    console.log(message);
    res.status(http_status_codes_1.default.OK).send(message);
});
exports.default = StartRoute;
