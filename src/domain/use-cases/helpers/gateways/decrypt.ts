export interface IDecrypt {
    decrypt: (ciphertext: string) => Promise<string>
}