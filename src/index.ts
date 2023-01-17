import express from "express";
import {Router, Request, Response, NextFunction} from "express";
import StartRoute from "./router/start.routes";
import UserRoute from "./router/user.routes";
import BookRoute from "./router/book.routes";
import BookCopyRoute from "./router/bookCopy.routes";
import BookCategoryRoute from "./router/bookCategory.routes";
import AddressRoute from "./router/address.routes";

require('dotenv').config({path: '.env'});

const api = express();

api.use(express.json());


api.use(StartRoute);
api.use(UserRoute);
api.use(BookRoute);
api.use(BookCopyRoute);
api.use(BookCategoryRoute);
api.use(AddressRoute);

api.listen(process.env.SERVER_PORT);