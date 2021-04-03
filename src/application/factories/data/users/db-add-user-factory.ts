import {IAddService} from "../../../../domain/use-cases/add-service";
import {UserModel} from "../../../../domain/models/user-model";
import {AddUserServiceImpl} from "../../../../domain/use-cases/impl/users/add-user-service-impl";
import {UserMongoRepositoryAdapter} from "../../../../infrastructure/driver-adapters/mongo-adapter/user-mongo-repository-adapter";
import {BcryptAdapter} from "../../../../infrastructure/driver-adapters/helpers/bcrypt-adapter";

export const makeDbAddUser = (): IAddService<UserModel> => {
    const salt = 12
    const bcryptAdapter = new BcryptAdapter(salt)
    const userMongoRepositoryAdapter = new UserMongoRepositoryAdapter()

    return new AddUserServiceImpl(
        userMongoRepositoryAdapter,
        userMongoRepositoryAdapter,
        bcryptAdapter
    )
}