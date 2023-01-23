import express from "express";
import {Router, Request, Response, NextFunction} from "express";
import StartRoute from "./router/status.routes";
import UserRoute from "./router/user.routes";
import BookRoute from "./router/book.routes";
import BookCopyRoute from "./router/bookCopy.routes";
import BookCategoryRoute from "./router/bookCategory.routes";
import AddressRoute from "./router/address.routes";
var cors = require("cors");
require('dotenv').config({path: '.env'});

const api = express();
const serverPort = process.env.PORT || 3000;
api.use(express.json());


api.use(StartRoute);
api.use(UserRoute);
api.use(BookRoute);
api.use(BookCopyRoute);
api.use(BookCategoryRoute);
api.use(AddressRoute);

// api.use((req, res, next) => {
// 	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
// 	//Quais são os métodos que a conexão pode realizar na API
//     res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
//     api.use(cors());
//     next();
// });
api.use(cors());

// api.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//     res.setHeader('Access-Control-Allow-Methods','Content-Type');
//     next(); 
// })

api.listen(serverPort);