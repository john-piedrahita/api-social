import {IAddService} from "../../../../domain/use-cases/add-service";
import {UserModel} from "../../../../domain/models/user-model";
import {AddUserServiceImpl} from "../../../../domain/use-cases/impl/users/add-user-service-impl";
import {UserMongoRepositoryAdapter} from "../../../../infrastructure/driver-adapters/mongo-adapter/user-mongo-repository-adapter";

export const makeDbAddUser = (): IAddService<UserModel> => {
    const userMongoRepositoryAdapter = new UserMongoRepositoryAdapter()

    return new AddUserServiceImpl(
        userMongoRepositoryAdapter,
        userMongoRepositoryAdapter
    )
}