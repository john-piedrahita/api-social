export interface IAddService<T> {
    addService: (data: T) => Promise<T | boolean>
}
