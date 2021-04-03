export interface ILoadByIdRepository<V, P = any, C = any> {
    loadByIdRepository: (value: V, param?: P, collection?: C) => Promise<ILoadByIdRepository.Result>
}

export namespace ILoadByIdRepository {
    export type Result = boolean
}