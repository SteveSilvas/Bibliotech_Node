const CategoryEntity = require("../entity/CategoryEntity");
import { Request, Response, NextFunction } from "express";
import StatusCodes from "http-status-codes";

module.exports = {
    async ListAll(req: Request, res: Response) {
        try {
            const categoriesList = await CategoryEntity.findAll();
            return res.status(StatusCodes.OK).json(categoriesList);
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send("Erro na lista de categorias: " + error);
        }
    },

    async GetById(req: Request, res: Response) {
        try {
            const category = await CategoryEntity.findByPk(req.params.Id);
            return res.status(StatusCodes.OK).json(category);
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send("Erro ao buscar Categoria - Id: " + req.params.Id);
        }
    },

    async addCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const category = await CategoryEntity.create({
                Description: req.body.Description
            });
            return res.status(StatusCodes.CREATED).send("Categoria adicionada com sucesso.");
        
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send("Erro ao adicionar categoria: " + error);
        }
    },

    async updateCategory(req: Request, res: Response) {
        try {
            const categoryEntity = await CategoryEntity.findByPk(req.body.Id);
            if (categoryEntity) {
                categoryEntity.Description= req.body.Description;
                categoryEntity.save();
            }

            return res.status(StatusCodes.OK).send("Categoria alterada com sucesso.");
        
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send("Erro ao alterar categoria: " + error);
        }
    },

    async deleteCategory(req: Request, res: Response) {
        try {
            const categoryEntity = await CategoryEntity.findByPk(req.body.Id);
            await categoryEntity.destroy();
            return res.status(StatusCodes.OK).send("Categoria excluída com sucesso.");
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send("Erro ao deletar categoria: " + error);
        }
    },
};
