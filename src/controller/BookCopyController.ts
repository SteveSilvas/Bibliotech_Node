const BookCopyEntity = require("../entity/BookCopyEntity");
import { Request, Response, NextFunction } from "express";
import StatusCodes from "http-status-codes";

module.exports = {
    async ListAll(req: Request, res: Response) {
        try {
            const bookCopiysList = await BookCopyEntity.findAll();
            return res.status(StatusCodes.OK).json(bookCopiysList);
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send("Erro na lista de exemplares: " + error);
        }
    },

    async GetById(req: Request, res: Response) {
        try {
            const bookCopy = await BookCopyEntity.findByPk(req.params.Id);
            return res.status(StatusCodes.OK).json(bookCopy);
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send("Erro ao buscar exemplar - Id: " + req.params.Id);
        }
    },

    async addBookCopy(req: Request, res: Response, next: NextFunction) {
        try {
            const bookCopy = await BookCopyEntity.create({
                Name: req.body.Name,
                Email: req.body.Email,
                Nascimento: req.body.Nascimento
            });
            return res.status(StatusCodes.CREATED).send("Exemplar adicionado com sucesso.");
        
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send("Erro ao adicionar exemplar: " + error);
        }
    },

    async updateBookCopy(req: Request, res: Response) {
        try {
            const bookCopyEntity = await BookCopyEntity.findByPk(req.body.Id);
            if (bookCopyEntity) {
                bookCopyEntity.ISBN= req.body.ISBN,
                bookCopyEntity.Editora= req.body.Editora,
                bookCopyEntity.TypePrint= req.body.TypePrint,
                bookCopyEntity.PublicationDate= req.body.PublicationDate,
                bookCopyEntity.PublicationLocality= req.body.PublicationLocality
                bookCopyEntity.save();
            }

            return res.status(StatusCodes.OK).send("Exemplar alterado com sucesso.");
        
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send("Erro ao alterar exemplar: " + error);
        }
    },

    async deleteBookCopy(req: Request, res: Response) {
        try {
            const bookCopyEntity = await BookCopyEntity.findByPk(req.body.Id);
            await bookCopyEntity.destroy();
            return res.status(StatusCodes.OK).send("Exemplar excluído com sucesso.");
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send("Erro ao deletar exemplar: " + error);
        }
    },
};
