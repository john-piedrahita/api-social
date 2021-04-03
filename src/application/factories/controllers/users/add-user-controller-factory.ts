import {IController} from "../../../../infrastructure/entry-points/gateways/controller";
import {AddUserController} from "../../../../infrastructure/entry-points/api/users/add-user-controller";
import {makeDbAddUser} from "../../../../application/factories/data/users/db-add-user-factory";

export const makeAddUserController = (): IController => {
    return new AddUserController(makeDbAddUser())
}