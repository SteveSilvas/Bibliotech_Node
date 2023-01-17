import {Router, Request, Response, NextFunction} from "express";
const BookController = require("../controller/BookController");
const UserRoute = Router();

UserRoute.get('/books', BookController.ListAll);

UserRoute.post('/books/add', BookController.addBook);

UserRoute.get('/books/:Id', BookController.GetById);

UserRoute.put('/books/update', BookController.updateBook);

UserRoute.delete('/books/delete', BookController.deleteBook)

export default UserRoute;