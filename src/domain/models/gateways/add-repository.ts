export interface IAddRepository<T, C = any> {
    addRepository: (data: T, collection?: C) => Promise<T>
}