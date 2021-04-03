import faker from "faker";
import {
    HttpRequest,
    notFound,
    unprocessableEntity
} from "../../../../src/infrastructure/helpers/http";
import {AddUserController} from "../../../../src/infrastructure/entry-points/api/users/add-user-controller";
import {MockAddUserSpy} from "../../../../tests/domain/mocks/abstract-load-field-repository-spy";

const mockRequest = (): HttpRequest => {
    const password = faker.internet.password()
    return {
        body: {
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: password,
            avatar: faker.internet.avatar(),
            date: Date.now()
        }
    }
}

const mockFieldsValidation = (): HttpRequest => {
    return {
        body: {
            name: "",
            email: "",
            password: "",
            avatar: ""
        },

    }
}

type SutTypes = {
    sut: AddUserController
    addUserSpy: MockAddUserSpy
}

const makeSut = (): SutTypes => {
    const addUserSpy = new MockAddUserSpy()
    const sut = new AddUserController(addUserSpy)
    return {
        sut,
        addUserSpy
    }
}

describe('Add user controller', () => {
    it('should call add user with corrects values',  async function () {
        const {sut} = makeSut()
        const request = mockRequest()
        const user = await sut.handle(request)
        expect(user).toBeTruthy()
    });

    it('should return 404 if user not exist', async function () {
        const {sut, addUserSpy} = makeSut()
        addUserSpy.result = null
        const httpResponse = await sut.handle(mockRequest())
        expect(httpResponse).toEqual(notFound())
    });

    it('should return 422 if fields this errors', async function () {
        const {sut} = makeSut()
        const httpResponse = await sut.handle(mockFieldsValidation())
        expect(httpResponse).toEqual(unprocessableEntity({
            "name": "name fields is required",
            "email": "email fields is required",
            "password": "password fields is required",
            "avatar": "avatar fields is required"
        }))
    });
})