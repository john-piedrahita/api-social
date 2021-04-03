import {InterfacesMongoRepositoryAdapter} from "../../../../infrastructure/driver-adapters/mongo-adapter/abstrations/interfaces-mongo-repository-adapter";
import {MongoHelper} from "../../../../infrastructure/driver-adapters/helpers/mongo-helper";
import {ILoadByFieldRepository} from "../../../../domain/models/gateways/load-by-field-repository";
import {ObjectId} from 'mongodb'
import {ILoadByIdRepository} from "../../../../domain/models/gateways/load-by-id-repository";

export abstract class AbstractMongoRepositoryAdapter<T> implements InterfacesMongoRepositoryAdapter<T, string> {

    /**
     * Esta función actuá de forma dinámica para los gestores de DB que
     * son de tipo SQL (Postgress, MySQL, etc), ya que hace las búsquedas
     * por cualquier parámetro de la tabla que recibe por argumento
     *
     * @param value
     * @param param
     * @param collection
     */
    async loadByFieldRepository(value: string, param: any, collection: any): Promise<ILoadByFieldRepository.Result> {
        const result = await MongoHelper.loadCollectionByParam(value, param, collection)
        if (result) return result && MongoHelper.map(result)
    }

    async addRepository(data: T, collection: any): Promise<T> {
        const result = await MongoHelper.addCollection(data, collection)
        if (result) return result && MongoHelper.map(result.ops[0])
    }

    /**
     * Esta función se implementa solo para el uso de mongoDB
     * por la estructura que devuelve en el _id ya que es de tipo Object
     *
     * @param value
     * @param param
     * @param collection
     */
    async loadByIdRepository(value: string, param: any, collection: any): Promise<ILoadByIdRepository.Result> {
        const collectionResult = await MongoHelper.getCollection(collection)
        const result = await collectionResult.findOne({_id: new ObjectId(value)})
        if (result) return result
    }
}