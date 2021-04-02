import {IController} from "../../../../infrastructure/entry-points/gateways/controller";
import {HttpRequest, HttpResponse, notFound, ok, serverError} from "../../../../infrastructure/helpers/http";
import {ILoadByFieldService} from "../../../../domain/use-cases/load-by-field-service";

export abstract class AbstractLoadFieldController<T> implements IController {

    constructor(
        private readonly loadByFieldService: ILoadByFieldService<T>
    ) {
    }

    async handle(request: HttpRequest): Promise<HttpResponse> {
       try {
           const {id} = request.params

           const result = await this.loadByFieldService.loadByFieldService(id)

           if (result === false) return notFound()

           return ok(result)

       } catch (e) {
           serverError(e)
       }
    }
}

