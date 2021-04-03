import * as faker from 'faker'
import {Collection} from "mongodb";
import {MongoHelper} from "../../../../src/infrastructure/driver-adapters/helpers/mongo-helper";
import {UserMongoRepositoryAdapter} from "../../../../src/infrastructure/driver-adapters/mongo-adapter/user-mongo-repository-adapter";
import {mockAddUserParams} from "../../../../tests/domain/mocks/mockAddUserParams";
import {MONGODB_URI} from "../../../../src/application/config/config";

let userCollection: Collection

describe('User mongo adapter', () => {

    beforeAll(async () => {
        await MongoHelper.connect(MONGODB_URI)
    })

    afterAll(async () => {
        await MongoHelper.disconnect()
    })

    beforeEach(async () => {
        userCollection = await MongoHelper.getCollection('users')
        await userCollection.deleteMany({})
    })

    const makeSut = (): UserMongoRepositoryAdapter => {
        return new UserMongoRepositoryAdapter()
    }

    it('should return an user on success',  async function () {
        const sut = makeSut()
        const addUserParams = mockAddUserParams()
        const user = await sut.addRepository(addUserParams, 'users')
        expect(user).toBeTruthy()
    });

    it('should return an user when email exist',  async function () {
        const sut = makeSut()
        const addUserParams = mockAddUserParams()
        await userCollection.insertOne(addUserParams)
        const user = await sut.loadByFieldRepository(addUserParams.email, 'email', 'users')
        expect(user).toBeTruthy()
    });

    it('should return false if Load by email exist', async  function () {
        const sut = makeSut()
        const user = await sut.loadByFieldRepository(faker.internet.email(), '', 'users')
        expect(user).toBeFalsy()
    });

    it('should return an account load by id repository', async function () {
        const sut = makeSut()
        const addUserParams = mockAddUserParams()
        const result = await userCollection.insertOne(addUserParams)
        const id = result.ops[0]._id
        const account = await sut.loadByIdRepository(id, '_id', 'users')
        expect(account).toBeTruthy()
    });

})