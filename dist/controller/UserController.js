"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserEntity = require("../entity/UserEntity");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
module.exports = {
    ListAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usersList = yield UserEntity.findAll();
                return res.status(http_status_codes_1.default.OK).json(usersList);
            }
            catch (error) {
                return console.log("Erro na lista de usuários: " + error);
            }
        });
    },
    GetById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserEntity.findByPk(req.params.Id);
                return res.status(http_status_codes_1.default.OK).json(user);
            }
            catch (error) {
                return console.log("Erro ao buscar usuário: " + req.params.Id);
            }
        });
    },
    addUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                // const user = await UserEntity.create({
                //     Name: req.body.Name,
                //     Email: req.body.Email,
                //     Nascimento: req.body.Nascimento
                // });
                // return console.log("Registro adicionado com sucesso.");
                return req.body;
            }
            catch (error) {
                return console.log("Erro ao adicionar usuário: " + error);
            }
        });
    },
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userEntity = yield UserEntity.findByPk(req.body.Id);
                if (userEntity) {
                    userEntity.Name = req.body.Name,
                        userEntity.Email = req.body.Email,
                        userEntity.Nascimento = req.body.Nascimento;
                    userEntity.save();
                }
                return console.log("Registro alterado com sucesso.");
            }
            catch (error) {
                return console.log("Erro ao alterar usuário: " + error);
            }
        });
    },
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userEntity = yield UserEntity.findByPk(req.body.Id);
                yield userEntity.destroy();
                return console.log("Registro excluído com sucesso.");
            }
            catch (error) {
                return console.log("Erro ao deletar usuário: " + error);
            }
        });
    },
};
