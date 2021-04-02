import {ILoadByFieldService} from "@/domain/use-cases/load-by-field-service";
import {ILoadByFieldRepository} from "@/domain/models/gateways/load-by-field-repository";

export abstract class AbstractLoadFieldService<T> implements ILoadByFieldService<T> {
    protected collection;
    protected param;

    protected constructor(
        private readonly loadByFieldRepository: ILoadByFieldRepository<T>
    ) {
        this.collection = null;
        this.param = null;
    }

    async loadByFieldService(value: T): Promise<ILoadByFieldService.Result> {
        const entity = await this.loadByFieldRepository.loadByFieldRepository(value, this.param, this.collection)

        if (!entity) return false

        if (entity) return entity
    }

}