import {UserModel} from "../../../../domain/models/user-model";
import {IAddRepository} from "../../../../domain/models/gateways/add-repository";
import {IAddService} from "../../../../domain/use-cases/add-service";
import {ILoadByFieldRepository} from "../../../../domain/models/gateways/load-by-field-repository";
import {IHash} from "@/domain/use-cases/helpers/gateways/hash";
import has = Reflect.has;

export class AddUserServiceImpl implements IAddService<UserModel> {
    constructor(
        private readonly addUserRepository: IAddRepository<UserModel>,
        private readonly loadUserByEmailRepository: ILoadByFieldRepository<string>,
        private readonly hash: IHash
    ) {
    }

    async addService(data: UserModel): Promise<boolean | UserModel> {
        const result = await this.loadUserByEmailRepository.loadByFieldRepository(data.email, 'email', 'users')
        if (result) return false

        if (!result) {
            const hashedPassword = await this.hash.hash(data.id)
            const entity = await this.addUserRepository.addRepository({...data, password: hashedPassword}, 'users')
            if (entity) return entity
        }
    }
}