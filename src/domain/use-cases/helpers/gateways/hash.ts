export interface IHash {
    hash: (text: string) => Promise<string>
}