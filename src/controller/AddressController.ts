const AddressEntity = require("../entity/AddressEntity");
import { Request, Response, NextFunction } from "express";
import StatusCodes from "http-status-codes";

module.exports = {
    async ListAll(req: Request, res: Response) {
        try {
            const addressList = await AddressEntity.findAll();
            return res.status(StatusCodes.OK).json(addressList);
        } catch (error) {
            return console.log("Erro na lista de endereços: " + error);
        }
    },

    async GetById(req: Request, res: Response) {
        try {
            const address = await AddressEntity.findByPk(req.params.Id);
            return res.status(StatusCodes.OK).json(address);
        } catch (error) {
            return console.log("Erro ao buscar endereço: " + req.params.Id);
        }
    },

    async addAddress(req: Request, res: Response, next: NextFunction) {
        try {
            const address = await AddressEntity.create({
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
        
        } catch (error) {
            return console.log("Erro ao adicionar endereço: " + error);
        }
    },

    async updateAddress(req: Request, res: Response) {
        try {
            const addressEntity = await AddressEntity.findByPk(req.body.Id);
            if (addressEntity) {
                addressEntity.Rua= req.body.Rua,
                addressEntity.Numero= req.body.Numero,
                addressEntity.Complemento= req.body.Complemento,
                addressEntity.Bairro= req.body.Bairro,
                addressEntity.Cep= req.body.Cep,
                addressEntity.Cidade= req.body.Cidade,
                addressEntity.Estado= req.body.Estado,
                addressEntity.Pais= req.body.Pais,

                addressEntity.save();
            }

            return console.log("Registro alterado com sucesso.");
        
        } catch (error) {
            return console.log("Erro ao alterar endereço: " + error);
        }
    },

    async deleteAddress(req: Request, res: Response) {
        try {
            const userEntity = await AddressEntity.findByPk(req.body.Id);
            await userEntity.destroy();
            return console.log("Registro excluído com sucesso.");
        } catch (error) {
            return console.log("Erro ao deletar endereço: " + error);
        }
    },
};
