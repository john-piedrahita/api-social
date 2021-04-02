import {AbstractLoadFieldService} from "../../../../domain/use-cases/impl/abstrations/abstract-load-field-service";
import {ILoadByFieldRepository} from "../../../../domain/models/gateways/load-by-field-repository";

export class LoadUserByIdServiceImpl extends AbstractLoadFieldService<string>{
    constructor(loadUserByIdRepository: ILoadByFieldRepository<string>) {
        super(loadUserByIdRepository);
        this.collection = 'users'
        this.param = '_id'
    }
}