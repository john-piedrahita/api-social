import {ILoadByFieldService} from "../../../../domain/use-cases/load-by-field-service";
import {LoadUserByIdServiceImpl} from "../../../../domain/use-cases/impl/users/load-user-by-id-service-impl";
import {UserMongoRepositoryAdapter} from "../../mongo-adapter/user-mongo-repository-adapter";

export const makeDbLoadUserById = (): ILoadByFieldService<string> => {
    const userMongoRepositoryAdapter = new UserMongoRepositoryAdapter()
    return new LoadUserByIdServiceImpl(userMongoRepositoryAdapter)
}