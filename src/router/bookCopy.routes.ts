import {Router, Request, Response, NextFunction} from "express";
const BookCopyController = require("../controller/BookCopyController");
const UserRoute = Router();

UserRoute.get('/books', BookCopyController.ListAll);

UserRoute.post('/books/add', BookCopyController.addBookCopy);

UserRoute.get('/books/:Id', BookCopyController.GetById);

UserRoute.put('/books/update', BookCopyController.updateBookCopy);

UserRoute.delete('/books/delete', BookCopyController.deleteBookCopy)

export default UserRoute;