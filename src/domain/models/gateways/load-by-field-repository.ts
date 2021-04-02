export interface ILoadByFieldRepository<V, P = any, C = any> {
    loadByFieldRepository: (value: V, param?: P, collection?: C) => Promise<ILoadByFieldRepository.Result>
}

export namespace ILoadByFieldRepository {
    export type Result = boolean
}