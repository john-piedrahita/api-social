import bcrypt from 'bcrypt'
import {BcryptAdapter} from "../../../../src/infrastructure/driver-adapters/helpers/bcrypt-adapter";

jest.mock('bcrypt', () => ({
    async hash(): Promise<string> {
        return 'hash'
    },

    async compare (): Promise<boolean> {
        return true
    }
}))

const salt = 12

const makeSut = (): BcryptAdapter => {
    return new BcryptAdapter(salt)
}

describe('Bcrypt adapter', () => {
    it('should call hash with correct values',  async function () {
        const sut = makeSut()
        const hashSpy = jest.spyOn(bcrypt, 'hash')
        await sut.hash('value')
        expect(hashSpy).toHaveBeenCalledWith('value', salt)
    });

    it('should return a valid hash on hash success', async function () {
        const sut = makeSut()
        const hash = await sut.hash('value')
        expect(hash).toBe('hash')
    });

    it('should call compare with correct values', async function () {
        const sut = makeSut()
        const compareSpy = jest.spyOn(bcrypt, 'compare')
        await sut.compare('value', 'hash')
        expect(compareSpy).toHaveBeenCalledWith('value', 'hash')
    });

    it('should return false when compare fails', async function () {
        const sut = makeSut()
        jest.spyOn(bcrypt, 'compare').mockResolvedValueOnce(false)
        const isValid = await sut.compare('value', 'hash')
        expect(isValid).toBe(false)
    });
})