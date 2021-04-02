import {NextFunction, Request, Response} from "express";

// Con esta funcion serializamos los datos a formato JSON,
// si esto ocurre continua el middleware
export const contentType = (req: Request, res: Response, next: NextFunction): void => {
    res.type('json')
    next()
}