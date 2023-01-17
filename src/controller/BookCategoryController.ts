const CategoryEntity = require("../entity/CategoryEntity");
import { Request, Response, NextFunction } from "express";
import StatusCodes from "http-status-codes";

module.exports = {
    async ListAll(req: Request, res: Response) {
        try {
            const categoriesList = await CategoryEntity.findAll();
            return res.status(StatusCodes.OK).json(categoriesList);
        } catch (error) {
            return console.log("Erro na lista de categorias: " + error);
        }
    },

    async GetById(req: Request, res: Response) {
        try {
            const category = await CategoryEntity.findByPk(req.params.Id);
            return res.status(StatusCodes.OK).json(category);
        } catch (error) {
            return console.log("Erro ao buscar Categoria - Id: " + req.params.Id);
        }
    },

    async addCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const category = await CategoryEntity.create({
                Description: req.body.Description
            });
            return console.log("Registro adicionado com sucesso.");
        
        } catch (error) {
            return console.log("Erro ao adicionar categoria: " + error);
        }
    },

    async updateCategory(req: Request, res: Response) {
        try {
            const categoryEntity = await CategoryEntity.findByPk(req.body.Id);
            if (categoryEntity) {
                categoryEntity.Description= req.body.Description;
                categoryEntity.save();
            }

            return console.log("Registro alterado com sucesso.");
        
        } catch (error) {
            return console.log("Erro ao alterar categoria: " + error);
        }
    },

    async deleteCategory(req: Request, res: Response) {
        try {
            const categoryEntity = await CategoryEntity.findByPk(req.body.Id);
            await categoryEntity.destroy();
            return console.log("Registro excluído com sucesso.");
        } catch (error) {
            return console.log("Erro ao deletar categoria: " + error);
        }
    },
};
