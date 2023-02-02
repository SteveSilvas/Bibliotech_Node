const UserEntity = require("../entity/UserEntity");
import { Request, Response, NextFunction } from "express";
import StatusCodes from "http-status-codes";

module.exports = {
    async ListAll(req: Request, res: Response) {
        try {
            const usersList = await UserEntity.findAll();
            return res.status(StatusCodes.OK).json(usersList);
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send("Erro na lista de usuários: " + error);
        }
    },

    async GetById(req: Request, res: Response) {
        try {
            const user = await UserEntity.findByPk(req.params.Id);
            return res.status(StatusCodes.OK).json(user);
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send("Erro ao buscar usuário: " + req.params.Id);
        }
    },

    async GetByEmail(req: Request, res: Response) {
        try {
            const users = await UserEntity.findAll();
            users.map((user: any) => {
                if (user.Email === req.params.Email) {
                    return res.status(StatusCodes.OK).json(user);
                }
            });
            return res
                .status(StatusCodes.BAD_REQUEST)
                .json("Usuário não encontrado com o email " + req.params.Email);
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send("Erro ao buscar usuário: " + req.params.Email);
        }
    },

    async addUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await UserEntity.create({
                Name: req.body.Name,
                Birth: req.body.Birth,
                Email: req.body.Email,
                Pass: req.body.Pass,
            });
            return res.status(StatusCodes.CREATED).send("Usuário adicionado com sucesso.");
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send("Erro ao adicionar usuário: " + error);
        }
    },

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await UserEntity.findAll();
            users.map((user: any) => {
                if (user.Email === req.body.data.Email) {
                    if (user.Pass === req.body.data.Pass) {
                        return res.status(StatusCodes.OK).json(user);
                    }else{
                        return res.status(StatusCodes.BAD_REQUEST).send("Senhas não conferem")
                    }
                }else{
                    return res.status(StatusCodes.BAD_REQUEST).send("Usuário não encontrado")
                }

            });

            return res.status(StatusCodes.OK).send("Usuário logado com sucesso.");
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send("Erro no login usuário: " + error);
        }
    },

    async updateUser(req: Request, res: Response) {
        try {
            const userEntity = await UserEntity.findByPk(req.body.Id);
            if (userEntity) {
                (userEntity.Name = req.body.Name),
                    (userEntity.Email = req.body.Email),
                    (userEntity.Nascimento = req.body.Nascimento);
                userEntity.save();
            }

            return res.status(StatusCodes.OK).send("Usuário alterado com sucesso.");
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send("Erro ao alterar usuário: " + error);
        }
    },

    async deleteUser(req: Request, res: Response) {
        try {
            const userEntity = await UserEntity.findByPk(req.body.Id);
            await userEntity.destroy();
            return res.status(StatusCodes.OK).send("Usuário excluído com sucesso.");
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).send("Erro ao deletar usuário: " + error);
        }
    },
};
