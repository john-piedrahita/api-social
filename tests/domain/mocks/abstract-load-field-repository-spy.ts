import {ILoadByFieldService} from "@/domain/use-cases/load-by-field-service";

export abstract class AbstractLoadFieldRepositorySpy implements ILoadByFieldService<string>{
    id: string
    result = true

    async loadByFieldService(value: string): Promise<ILoadByFieldService.Result> {
        this.id = value
        return this.result
    }

}