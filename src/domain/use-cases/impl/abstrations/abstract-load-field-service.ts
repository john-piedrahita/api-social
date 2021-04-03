import {ILoadByFieldService} from "@/domain/use-cases/load-by-field-service";
import {ILoadByFieldRepository} from "@/domain/models/gateways/load-by-field-repository";
import {ILoadByIdRepository} from "@/domain/models/gateways/load-by-id-repository";

export abstract class AbstractLoadByIdService<T> implements ILoadByFieldService<T> {
    protected collection;
    protected param;

    protected constructor(
        private readonly loadByIdRepository: ILoadByIdRepository<T>
    ) {
        this.collection = null;
        this.param = null;
    }

    async loadByFieldService(value: T): Promise<ILoadByFieldService.Result> {
        const entity = await this.loadByIdRepository.loadByIdRepository(value, this.param, this.collection)

        if (!entity) return false

        if (entity) return entity
    }

}