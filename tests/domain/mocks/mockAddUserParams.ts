import {UserModel} from "@/domain/models/user-model";
import faker from "faker";

export const mockAddUserParams = (): UserModel => ({
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.random.word(),
    avatar: faker.internet.avatar(),
    date: faker.date.future()
})