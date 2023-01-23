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
const CategoryEntity = require("../entity/CategoryEntity");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
module.exports = {
    ListAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoriesList = yield CategoryEntity.findAll();
                return res.status(http_status_codes_1.default.OK).json(categoriesList);
            }
            catch (error) {
                return console.log("Erro na lista de categorias: " + error);
            }
        });
    },
    GetById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield CategoryEntity.findByPk(req.params.Id);
                return res.status(http_status_codes_1.default.OK).json(category);
            }
            catch (error) {
                return console.log("Erro ao buscar Categoria - Id: " + req.params.Id);
            }
        });
    },
    addCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield CategoryEntity.create({
                    Description: req.body.Description
                });
                return console.log("Registro adicionado com sucesso.");
            }
            catch (error) {
                return console.log("Erro ao adicionar categoria: " + error);
            }
        });
    },
    updateCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoryEntity = yield CategoryEntity.findByPk(req.body.Id);
                if (categoryEntity) {
                    categoryEntity.Description = req.body.Description;
                    categoryEntity.save();
                }
                return console.log("Registro alterado com sucesso.");
            }
            catch (error) {
                return console.log("Erro ao alterar categoria: " + error);
            }
        });
    },
    deleteCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoryEntity = yield CategoryEntity.findByPk(req.body.Id);
                yield categoryEntity.destroy();
                return console.log("Registro excluído com sucesso.");
            }
            catch (error) {
                return console.log("Erro ao deletar categoria: " + error);
            }
        });
    },
};
