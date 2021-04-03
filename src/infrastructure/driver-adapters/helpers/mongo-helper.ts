import {Collection, MongoClient, ObjectId} from "mongodb";

export const MongoHelper = {
    client: null as MongoClient,
    uri: null as string,

    async connect(uri: string): Promise<void> {
        this.uri = uri
        this.client = await MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    },

    async disconnect(): Promise<void> {
        await this.client.close()
        this.client = null
    },

    async getCollection(name: string): Promise<Collection> {
        if (!this.client?.isConnected()) {
            await this.connect(this.uri)
        }

        return this.client.db().collection(name)
    },

    async loadCollectionByParam(value: string, param: string, collection: string): Promise<any> {
        let objectFilter = {}
        objectFilter[param] = value

        const collectionResult = await MongoHelper.getCollection(collection)
        const result = await collectionResult.findOne(objectFilter)
        if (result) return result
    },

    async addCollection(value: any, collection: string): Promise<any> {
        const collectionResult = await MongoHelper.getCollection(collection)
        const result = await collectionResult.insertOne(value)

        if (result) return result && MongoHelper.map(result)
    },

    map: (data: any): any => {
        const {_id, ...rest} = data
        return Object.assign({}, rest, {id: _id})
    },

    mapCollection: (collection: any[]): any[] => {
        return collection.map(c => MongoHelper.map(c))
    }
}
