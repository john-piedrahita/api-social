import {ILoadByFieldRepository} from "../../../../domain/models/gateways/load-by-field-repository";
import {IAddRepository} from "../../../../domain/models/gateways/add-repository";
import {ILoadByIdRepository} from "../../../../domain/models/gateways/load-by-id-repository";

export interface InterfacesMongoRepositoryAdapter<T, U = any> extends
    ILoadByFieldRepository<string>, IAddRepository<T>, ILoadByIdRepository<string> {
}