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
const BookCopyEntity = require("../entity/BookCopyEntity");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
module.exports = {
    ListAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bookCopiysList = yield BookCopyEntity.findAll();
                return res.status(http_status_codes_1.default.OK).json(bookCopiysList);
            }
            catch (error) {
                return console.log("Erro na lista de exemplares: " + error);
            }
        });
    },
    GetById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bookCopy = yield BookCopyEntity.findByPk(req.params.Id);
                return res.status(http_status_codes_1.default.OK).json(bookCopy);
            }
            catch (error) {
                return console.log("Erro ao buscar exemplar - Id: " + req.params.Id);
            }
        });
    },
    addBookCopy(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bookCopy = yield BookCopyEntity.create({
                    Name: req.body.Name,
                    Email: req.body.Email,
                    Nascimento: req.body.Nascimento
                });
                return console.log("Registro adicionado com sucesso.");
            }
            catch (error) {
                return console.log("Erro ao adicionar exemplar: " + error);
            }
        });
    },
    updateBookCopy(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bookCopyEntity = yield BookCopyEntity.findByPk(req.body.Id);
                if (bookCopyEntity) {
                    bookCopyEntity.ISBN = req.body.ISBN,
                        bookCopyEntity.Editora = req.body.Editora,
                        bookCopyEntity.TypePrint = req.body.TypePrint,
                        bookCopyEntity.PublicationDate = req.body.PublicationDate,
                        bookCopyEntity.PublicationLocality = req.body.PublicationLocality;
                    bookCopyEntity.save();
                }
                return console.log("Registro alterado com sucesso.");
            }
            catch (error) {
                return console.log("Erro ao alterar exemplar: " + error);
            }
        });
    },
    deleteBookCopy(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bookCopyEntity = yield BookCopyEntity.findByPk(req.body.Id);
                yield bookCopyEntity.destroy();
                return console.log("Registro excluído com sucesso.");
            }
            catch (error) {
                return console.log("Erro ao deletar exemplar: " + error);
            }
        });
    },
};
