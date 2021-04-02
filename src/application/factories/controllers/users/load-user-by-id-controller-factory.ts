import {IController} from "../../../../infrastructure/entry-points/gateways/controller";
import {LoadUserByIdController} from "../../../../infrastructure/entry-points/api/users/load-user-by-id-controller";
import {makeDbLoadUserById} from "../../data/users/db-load-user-by-id-factory";

export const makeLoadUserByIdController = (): IController => {
    return new LoadUserByIdController(makeDbLoadUserById())
}