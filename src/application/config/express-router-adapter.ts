import {Request, Response} from 'express'
import {IController} from "../../infrastructure/entry-points/gateways/controller";
import {HttpRequest} from "../../infrastructure/helpers/http";

/**
 * Este adaptador nos conecta el controlador con el framework (Express)
 * por medio de la interfaz IController, para luego hacer la Inversion de Dependencias
 * entre la capa de infraestructura y la capa de la aplicacion en las rutas
 *
 * @param controller
 */
export const adaptRoute = (controller: IController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            body: req.body,
            params: req.params
        }

        const httpResponse = await controller.handle(httpRequest)

        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            await res.status(httpResponse.statusCode).json(httpResponse.body)
        } else {
            await res.status(httpResponse.statusCode).json({
                error: httpResponse.body.message
            })
        }
    }
}