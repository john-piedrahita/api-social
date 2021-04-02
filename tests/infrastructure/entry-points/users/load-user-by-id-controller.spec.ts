import {LoadUserByIdController} from "../../../../src/infrastructure/entry-points/api/users/load-user-by-id-controller";
import {MockLoadUserByIdRepositorySpy} from "../../../../tests/domain/mocks/mock-load-user-by-id-repository-spy";
import {HttpRequest} from "../../../../src/infrastructure/helpers/http";
import * as faker from 'faker'

const mockRequest = (): HttpRequest => {
    return {
        params: faker.datatype.uuid()
    }
}

type SutTypes = {
    sut: LoadUserByIdController
    mockLoadUserByIdServiceSpy: MockLoadUserByIdRepositorySpy
}

const makeSut = (): SutTypes => {
    const mockLoadUserByIdServiceSpy = new MockLoadUserByIdRepositorySpy()
    const sut = new LoadUserByIdController(mockLoadUserByIdServiceSpy)

    return {
        sut, mockLoadUserByIdServiceSpy
    }
}


describe('Load user by id controller', () => {
    it('should call load user by id with corrects values', async function () {
        const {sut} = makeSut()
        const request = mockRequest()
        const httpResponse = await sut.handle(request)
        expect(httpResponse).toBeTruthy()
    });
})