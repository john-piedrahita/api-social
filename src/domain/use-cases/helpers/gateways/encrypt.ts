export interface IEncrypt {
    encrypt: (plaintext: string) => Promise<string>
}
