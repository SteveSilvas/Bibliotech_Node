import {Router, Request, Response, NextFunction} from "express";
const BookCategoryController = require("../controller/BookCategoryController");
const UserRoute = Router();

UserRoute.get('/category', BookCategoryController.ListAll);

UserRoute.post('/category/add', BookCategoryController.addCategory);

UserRoute.get('/category/:Id', BookCategoryController.GetById);

UserRoute.put('/category/update', BookCategoryController.updateCategory);

UserRoute.delete('/category/delete', BookCategoryController.deleteCategory)

export default UserRoute;