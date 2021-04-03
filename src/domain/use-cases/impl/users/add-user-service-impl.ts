import {UserModel} from "../../../../domain/models/user-model";
import {IAddRepository} from "../../../../domain/models/gateways/add-repository";
import {IAddService} from "../../../../domain/use-cases/add-service";
import {ILoadByFieldRepository} from "../../../../domain/models/gateways/load-by-field-repository";

export class AddUserServiceImpl implements IAddService<UserModel> {
    constructor(
        private readonly addUserRepository: IAddRepository<UserModel>,
        private readonly loadUserByEmailRepository: ILoadByFieldRepository<string>
    ) {
    }

    async addService(data: UserModel): Promise<boolean | UserModel> {
        const result = await this.loadUserByEmailRepository.loadByFieldRepository(data.email, 'email', 'users')
        if (result) return false

        const entity = await this.addUserRepository.addRepository(data, 'users')
        if (entity) return entity
        return null
    }
}