export interface ILoadByFieldService<T> {
    loadByFieldService: (value: T) => Promise<ILoadByFieldService.Result>
}

export namespace ILoadByFieldService {
    export type Result = boolean
}