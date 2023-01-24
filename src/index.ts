import express from "express";
import StatusRoute from "./router/status.routes";
import UserRoute from "./router/user.routes";
import BookRoute from "./router/book.routes";
import BookCopyRoute from "./router/bookCopy.routes";
import BookCategoryRoute from "./router/bookCategory.routes";
import AddressRoute from "./router/address.routes";
var cors = require("cors");
require('dotenv').config({path: '.env'});

const api = express();
const serverPort = process.env.PORT || 3000;
api.use(cors({credentials: true, origin: '*', crossorigin:true}));

api.use(express.json());


api.use(StatusRoute);
api.use(UserRoute);
api.use(BookRoute);
api.use(BookCopyRoute);
api.use(BookCategoryRoute);
api.use(AddressRoute);
api.listen(serverPort);