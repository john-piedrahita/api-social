export interface IHashCompare {
    compare: (text: string, digest: string) => Promise<boolean>
}