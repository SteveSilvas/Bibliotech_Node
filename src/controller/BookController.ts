const BookEntity = require("../entity/BookEntity");
const Category = require("../entity/CategoryEntity")
import { Request, Response, NextFunction } from "express";
import StatusCodes from "http-status-codes";

module.exports = {
    async ListAll(req: Request, res: Response) {
        try {
            // const booksList = await BookEntity.findAll();
            const booksList = await BookEntity.findAll({
                order: [['Id', 'DESC']],
                include: [{
                    attributes:['Description'],
                    model: Category
                }]
            });
            return res.status(StatusCodes.OK).json(booksList);
        } catch (error) {
            return console.log("Erro na lista de livros: " + error);
        }
    },

    async GetById(req: Request, res: Response) {
        try {
            const book = await BookEntity.findByPk(req.params.Id);
            return res.status(StatusCodes.OK).json(book);
        } catch (error) {
            return console.log("Erro ao buscar livro - Id: " + req.params.Id);
        }
    },

    async addBook(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(req.body)
            const book = await BookEntity.create({
                Title: req.body.data.Title,
                Autor: req.body.data.Autor,
                CategoryId: req.body.data.CategoryId,
                CreationDate: req.body.data.CreationDate,
                CreationLocality: req.body.data.CreationLocality
            });
            return console.log("Registro adicionado com sucesso.");
        
        } catch (error) {
            return console.log("Erro ao adicionar livro: " + error);
        }
    },

    async updateBook(req: Request, res: Response) {
        try {
            const bookEntity = await BookEntity.findByPk(req.body.Id);
            if (bookEntity) {
                bookEntity.Title= req.body.Title,
                bookEntity.Autor= req.body.Autor,
                bookEntity.Category= req.body.Category,
                bookEntity.CreationDate= req.body.CreationDate,
                bookEntity.CreationLocality= req.body.CreationLocality,

                bookEntity.save();
            }

            return console.log("Registro alterado com sucesso.");
        
        } catch (error) {
            return console.log("Erro ao alterar livro: " + error);
        }
    },

    async deleteBook(req: Request, res: Response) {
        try {
            const userEntity = await BookEntity.findByPk(req.body.Id);
            await userEntity.destroy();
            return console.log("Registro excluído com sucesso.");
        } catch (error) {
            return console.log("Erro ao deletar livro: " + error);
        }
    },
};
