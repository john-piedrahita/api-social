import {Request, Response, Router} from "express";
import {adaptRoute} from "../../application/config/express-router-adapter";
import {makeLoadUserByIdController} from "../../application/factories/controllers/users/load-user-by-id-controller-factory";
import {makeAddUserController} from "../../application/factories/controllers/users/add-user-controller-factory";

export default (router: Router): void => {
    router.get('/test', (req: Request, res: Response) => res.json('Hello word'))
    router.get('/users/:id', adaptRoute(makeLoadUserByIdController()))
    router.post('/users', adaptRoute(makeAddUserController()))
}