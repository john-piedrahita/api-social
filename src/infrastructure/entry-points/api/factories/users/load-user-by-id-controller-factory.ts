import {IController} from "../../../gateways/controller";
import {LoadUserByIdController} from "../../users/load-user-by-id-controller";
import {makeDbLoadUserById} from "../../../../driver-adapters/factories/users/db-load-user-by-id-factory";

export const makeLoadUserByIdController = (): IController => {
    return new LoadUserByIdController(makeDbLoadUserById())
}