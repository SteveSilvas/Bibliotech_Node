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
const AddressEntity = require("../entity/AddressEntity");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
module.exports = {
    ListAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const addressList = yield AddressEntity.findAll();
                return res.status(http_status_codes_1.default.OK).json(addressList);
            }
            catch (error) {
                return console.log("Erro na lista de endereços: " + error);
            }
        });
    },
    GetById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const address = yield AddressEntity.findByPk(req.params.Id);
                return res.status(http_status_codes_1.default.OK).json(address);
            }
            catch (error) {
                return console.log("Erro ao buscar endereço: " + req.params.Id);
            }
        });
    },
    addAddress(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const address = yield AddressEntity.create({
                    Rua: req.body.Rua,
                    Numero: req.body.Numero,
                    Complemento: req.body.Complemento,
                    Bairro: req.body.Bairro,
                    Cep: req.body.Cep,
                    Cidade: req.body.Cidade,
                    Estado: req.body.Estado,
                    Pais: req.body.Pais
                });
                return console.log("Registro adicionado com sucesso.");
            }
            catch (error) {
                return console.log("Erro ao adicionar endereço: " + error);
            }
        });
    },
    updateAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const addressEntity = yield AddressEntity.findByPk(req.body.Id);
                if (addressEntity) {
                    addressEntity.Rua = req.body.Rua,
                        addressEntity.Numero = req.body.Numero,
                        addressEntity.Complemento = req.body.Complemento,
                        addressEntity.Bairro = req.body.Bairro,
                        addressEntity.Cep = req.body.Cep,
                        addressEntity.Cidade = req.body.Cidade,
                        addressEntity.Estado = req.body.Estado,
                        addressEntity.Pais = req.body.Pais,
                        addressEntity.save();
                }
                return console.log("Registro alterado com sucesso.");
            }
            catch (error) {
                return console.log("Erro ao alterar endereço: " + error);
            }
        });
    },
    deleteAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userEntity = yield AddressEntity.findByPk(req.body.Id);
                yield userEntity.destroy();
                return console.log("Registro excluído com sucesso.");
            }
            catch (error) {
                return console.log("Erro ao deletar endereço: " + error);
            }
        });
    },
};
