import {Router, Request, Response, NextFunction} from "express";
const UserController = require("../controller/UserController");
const UserRoute = Router();

UserRoute.get('/users', UserController.ListAll);

UserRoute.post('/users/add', UserController.addUser);

UserRoute.get('/users/:Id', UserController.GetById);

UserRoute.put('/users/update', UserController.updateUser);

UserRoute.delete('/users/delete', UserController.deleteUser)

export default UserRoute;