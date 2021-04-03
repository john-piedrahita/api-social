import {IController} from "../../../gateways/controller";
import {AddUserController} from "../../users/add-user-controller";
import {makeDbAddUser} from "../../../../driver-adapters/factories/users/db-add-user-factory";

export const makeAddUserController = (): IController => {
    return new AddUserController(makeDbAddUser())
}