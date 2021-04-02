export type PostModel = {
    id: string
    userId: string
    text: string
    name: string
    avatar?: string
    likes?: PostLikesModel[]
    comments?: PostCommentsModel[]
    date: Date
}

export type PostLikesModel = {
    id: string
    userId?: string
}

export type PostCommentsModel = {
    id: string
    userId: string
    text: string
    name: string
    avatar?: string
    date: Date
}