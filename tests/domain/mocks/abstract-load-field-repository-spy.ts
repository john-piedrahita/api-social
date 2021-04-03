import {ILoadByFieldService} from "@/domain/use-cases/load-by-field-service";
import {ILoadByIdRepository} from "@/domain/models/gateways/load-by-id-repository";
import {IAddService} from "@/domain/use-cases/add-service";
import {UserModel} from "@/domain/models/user-model";
import faker from "faker";

export abstract class AbstractLoadFieldRepositorySpy implements ILoadByFieldService<string>{
    id: string
    result = true

    async loadByFieldService(value: string): Promise<ILoadByFieldService.Result> {
        this.id = value
        return this.result
    }
}

export class MockLoadUserByIdRepositorySpy implements ILoadByIdRepository<string> {
    id: string
    result: true

    async loadByIdRepository(value: string, param: any, collection: any): Promise<ILoadByIdRepository.Result> {
        this.id = value
        return this.result
    }
}

export class MockAddUserSpy implements IAddService<UserModel | boolean> {
    params: UserModel
    result = {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
        date: faker.date.future()
    }

    async addService(data: UserModel): Promise<boolean | UserModel> {
        this.params = data
        return this.result
    }
}