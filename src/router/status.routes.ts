import {Router, Request, Response, NextFunction} from "express";
import StatusCodes from 'http-status-codes';

const StartRoute = Router();

StartRoute.get('/status', (req: Request, res: Response, next: NextFunction)=>{
    const message = "Teste de Rotas com sucesso.";
    console.log(message);
    res.status(StatusCodes.OK).send(message);
});



export default StartRoute;