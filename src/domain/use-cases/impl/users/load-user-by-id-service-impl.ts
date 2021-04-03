import {
    AbstractLoadByIdService
} from "../../../../domain/use-cases/impl/abstrations/abstract-load-field-service";
import {ILoadByIdRepository} from "../../../../domain/models/gateways/load-by-id-repository";

export class LoadUserByIdServiceImpl extends AbstractLoadByIdService <string> {
    constructor(loadByIdRepository: ILoadByIdRepository<string>) {
        super(loadByIdRepository);
        this.collection = 'users'
        this.param = '_id'
    }
}