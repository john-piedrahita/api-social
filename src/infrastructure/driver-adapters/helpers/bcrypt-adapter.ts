import bcrypt from 'bcrypt'
import {IHash} from "../../../domain/use-cases/helpers/gateways/hash";
import {IHashCompare} from "../../../domain/use-cases/helpers/gateways/hash-compare";

export class BcryptAdapter implements IHash, IHashCompare {

    constructor(private readonly salt: number) {
    }

    async compare(text: string, digest: string): Promise<boolean> {
        return  bcrypt.compare(text, digest)
    }

   async hash(text: string): Promise<string> {
        return bcrypt.hash(text, this.salt);
    }

}