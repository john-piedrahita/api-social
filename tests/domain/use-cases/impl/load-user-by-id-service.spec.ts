import {LoadUserByIdServiceImpl} from "../../../../src/domain/use-cases/impl/users/load-user-by-id-service-impl";
import {MockLoadUserByIdRepositorySpy} from "../../../../tests/domain/mocks/abstract-load-field-repository-spy";
import {throwError} from "../../../../tests/domain/mocks/mock-error";
import * as faker from 'faker'

type SutTypes = {
    sut: LoadUserByIdServiceImpl
    loadUserByIdRepositorySpy: MockLoadUserByIdRepositorySpy
}

const makeSut = (): SutTypes => {
    const loadUserByIdRepositorySpy = new MockLoadUserByIdRepositorySpy()
    const sut = new LoadUserByIdServiceImpl(loadUserByIdRepositorySpy)

    return {
        sut,
        loadUserByIdRepositorySpy
    }
}

let userById: string

describe('Load user by id service', () => {
    beforeEach(() => {
        userById = faker.datatype.uuid()
    })

    it('should call load user by id repository', async function () {
        const {sut, loadUserByIdRepositorySpy} = makeSut()
        await sut.loadByFieldService(userById)
        expect(loadUserByIdRepositorySpy.id).toBe(userById)
    });

    it('should return false if LoadUserByIdRepository returns false',  async function () {
        const {sut} = makeSut()
        const exist = await sut.loadByFieldService(userById)
        expect(exist).toBe(false)
    });

    it('should throw if LoadUserByIdRepository throws', async function () {
        const {sut, loadUserByIdRepositorySpy} = makeSut()
        jest.spyOn(loadUserByIdRepositorySpy, 'loadByIdRepository').mockImplementationOnce(throwError)
        const promise = sut.loadByFieldService(userById)
        await expect(promise).rejects.toThrow()
    });
})