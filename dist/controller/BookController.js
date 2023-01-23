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
const BookEntity = require("../entity/BookEntity");
const Category = require("../entity/CategoryEntity");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
module.exports = {
    ListAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const booksList = await BookEntity.findAll();
                const booksList = yield BookEntity.findAll({
                    order: [['Id', 'DESC']],
                    include: [{
                            attributes: ['Description'],
                            model: Category
                        }]
                });
                return res.status(http_status_codes_1.default.OK).json(booksList);
            }
            catch (error) {
                return console.log("Erro na lista de livros: " + error);
            }
        });
    },
    GetById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield BookEntity.findByPk(req.params.Id);
                return res.status(http_status_codes_1.default.OK).json(book);
            }
            catch (error) {
                return console.log("Erro ao buscar livro - Id: " + req.params.Id);
            }
        });
    },
    addBook(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield BookEntity.create({
                    Title: req.body.Title,
                    Autor: req.body.Autor,
                    CategoryId: req.body.CategoryId,
                    CreationDate: req.body.CreationDate,
                    CreationLocality: req.body.CreationLocality
                });
                return console.log("Registro adicionado com sucesso.");
            }
            catch (error) {
                return console.log("Erro ao adicionar livro: " + error);
            }
        });
    },
    updateBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bookEntity = yield BookEntity.findByPk(req.body.Id);
                if (bookEntity) {
                    bookEntity.Title = req.body.Title,
                        bookEntity.Autor = req.body.Autor,
                        bookEntity.Category = req.body.Category,
                        bookEntity.CreationDate = req.body.CreationDate,
                        bookEntity.CreationLocality = req.body.CreationLocality,
                        bookEntity.save();
                }
                return console.log("Registro alterado com sucesso.");
            }
            catch (error) {
                return console.log("Erro ao alterar livro: " + error);
            }
        });
    },
    deleteBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userEntity = yield BookEntity.findByPk(req.body.Id);
                yield userEntity.destroy();
                return console.log("Registro excluído com sucesso.");
            }
            catch (error) {
                return console.log("Erro ao deletar livro: " + error);
            }
        });
    },
};
