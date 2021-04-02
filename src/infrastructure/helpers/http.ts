import {ServerError, UnauthorizedError} from "./errors";

export type HttpResponse = {
    statusCode: number
    body: any
}

export type HttpRequest = {
    body?: any
    headers?: any
    params?: any
}

export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    body: data
})

export const noContent = (): HttpResponse => ({
    statusCode: 204,
    body: ""
})

export const badRequest = (error: string): HttpResponse => ({
    statusCode: 400,
    body: {"message": error}
})

export const notFound = (): HttpResponse => ({
    statusCode: 404,
    body: {"message": "Page not found"},
})

export const unauthorized = (): HttpResponse => ({
    statusCode: 401,
    body: new UnauthorizedError()
})

export const forbidden = (error: Error): HttpResponse => ({
    statusCode: 403,
    body: error
})

export const unprocessableEntity = (error: any): HttpResponse => ({
    statusCode: 422,
    body: {"message": error}
})

export const serverError = (error: Error): HttpResponse => ({
    statusCode: 500,
    body: new ServerError(error.stack)
})