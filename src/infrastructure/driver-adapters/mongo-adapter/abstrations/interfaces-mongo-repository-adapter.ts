import {ILoadByFieldRepository} from "../../../../domain/models/gateways/load-by-field-repository";

export interface InterfacesMongoRepositoryAdapter<T, U = any> extends
    ILoadByFieldRepository<string> {
}