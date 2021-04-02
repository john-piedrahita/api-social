import {InterfacesMongoRepositoryAdapter} from "../../../../infrastructure/driver-adapters/mongo-adapter/abstrations/interfaces-mongo-repository-adapter";
import {MongoHelper} from "../../../../infrastructure/driver-adapters/helpers/mongo-helper";
import {ILoadByFieldRepository} from "../../../../domain/models/gateways/load-by-field-repository";

export abstract class AbstractMongoRepositoryAdapter<T> implements InterfacesMongoRepositoryAdapter<T, string> {
    async loadByFieldRepository(value: string, param: any, collection: any): Promise<ILoadByFieldRepository.Result> {
        const result = await MongoHelper.loadCollectionByParam(value, param, collection)
        if (result) return result && MongoHelper.map(result)
    }
}