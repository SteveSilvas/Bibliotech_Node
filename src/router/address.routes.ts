import {Router, Request, Response, NextFunction} from "express";
const AddressController = require("../controller/AddressController");
const UserRoute = Router();

UserRoute.get('/address', AddressController.ListAll);

UserRoute.post('/address/add', AddressController.addAddress);

UserRoute.get('/address/:Id', AddressController.GetById);

UserRoute.put('/boaddressoks/update', AddressController.updateAddress);

UserRoute.delete('/address/delete', AddressController.deleteAddress)

export default UserRoute;