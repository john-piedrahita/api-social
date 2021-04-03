import {LoadUserByIdController} from "../../../../src/infrastructure/entry-points/api/users/load-user-by-id-controller";
import {MockLoadUserByIdServiceSpy} from "../../../domain/mocks/mock-load-user-by-id-service-spy";
import {HttpRequest, serverError} from "../../../../src/infrastructure/helpers/http";
import * as faker from 'faker'
import {throwError} from "../../../../tests/domain/mocks/mock-error";
import {ServerError} from "../../../../src/infrastructure/helpers/errors";

const mockRequest = (): HttpRequest => {
    return {
        params: faker.datatype.uuid()
    }
}

type SutTypes = {
    sut: LoadUserByIdController
    mockLoadUserByIdServiceSpy: MockLoadUserByIdServiceSpy
}

const makeSut = (): SutTypes => {
    const mockLoadUserByIdServiceSpy = new MockLoadUserByIdServiceSpy()
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