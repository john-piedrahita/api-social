import {AddUserServiceImpl} from "../../../../src/domain/use-cases/impl/users/add-user-service-impl";
import {
    HashSpy,
    MockAddUserRepositorySpy,
    MockLoadFieldRepositorySpy
} from "../../../../tests/domain/mocks/abstract-load-field-repository-spy";
import {throwError} from "../../../../tests/domain/mocks/mock-error";
import {mockAddUserParams} from "../../../../tests/domain/mocks/mockAddUserParams";

type SutTypes = {
    sut: AddUserServiceImpl
    hashSpy: HashSpy
    addUserRepositorySpy: MockAddUserRepositorySpy
    loadByFieldRepositorySpy: MockLoadFieldRepositorySpy
}

const makeSut = (): SutTypes => {
    const hashSpy = new HashSpy()
    const addUserRepositorySpy = new MockAddUserRepositorySpy()
    const loadByFieldRepositorySpy = new MockLoadFieldRepositorySpy()
    const sut = new AddUserServiceImpl(
        addUserRepositorySpy,
        loadByFieldRepositorySpy,
        hashSpy
    )

    return {
        sut,
        addUserRepositorySpy,
        loadByFieldRepositorySpy,
        hashSpy
    }
}

describe('Add user service', () => {

    it('should throw if add user repository throws', async function () {
        const {sut, addUserRepositorySpy} = makeSut()
        jest.spyOn(addUserRepositorySpy, 'addRepository').mockImplementationOnce(throwError)
        const promise = sut.addService(mockAddUserParams())
        await expect(promise).rejects.toThrow()
    });

    it('should return false if check user by email repository exist', async function () {
        const {sut, loadByFieldRepositorySpy} = makeSut()
        loadByFieldRepositorySpy.result = true
        const exist = await sut.addService(mockAddUserParams())
        expect(exist).toBeFalsy()
    });

    it('should call add user repository with correct values',  async function () {
        const {sut, addUserRepositorySpy, hashSpy} = makeSut()
        const addUserParams = mockAddUserParams()
        await sut.addService(addUserParams)
        expect(addUserRepositorySpy.params).toEqual({
            id: addUserParams.id,
            name: addUserParams.name,
            email: addUserParams.email,
            date: addUserParams.date,
            avatar: addUserParams.avatar,
            password: hashSpy.digest
        })
    });
})