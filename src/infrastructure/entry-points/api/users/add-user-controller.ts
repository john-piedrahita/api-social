import {IController} from "../../../../infrastructure/entry-points/gateways/controller";
import {
    badRequest,
    HttpRequest,
    HttpResponse,
    notFound,
    ok,
    serverError,
    unprocessableEntity
} from "../../../../infrastructure/helpers/http";
import {IAddService} from "../../../../domain/use-cases/add-service";
import {fieldsValidation} from "../../../../infrastructure/helpers/fileds-validation";
import {UserModel} from "../../../../domain/models/user-model";

//TODO Generar clase abstracta para esta implementación
export class AddUserController implements IController {
    constructor(
        private readonly AddUserService: IAddService<UserModel>
    ) {
    }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        try {
            const {errors, isValid} = fieldsValidation(request.body)

            if (!isValid) return unprocessableEntity(errors)

            const user = await this.AddUserService.addService({...request.body})

            if (user === null) return notFound()

            if (user === false) return badRequest('El email ya existe en la DB')

            return ok(user)

        } catch (e) {
            serverError(e)
        }
    }
}