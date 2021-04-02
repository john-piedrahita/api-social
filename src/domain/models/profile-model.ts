export type ProfileModel = {
    id: string
    userId: string
    company?: string
    website?: string
    location?: string
    status: string
    skills: []
    bio?: string
    experience?: ProfileExperienceModel[]
    education?: ProfileEducationModel[]
    social?: ProfileSocialModel
    date: Date
}

export type ProfileExperienceModel = {
    id: string
    title: string
    company: string
    location: string
    from: Date
    to: Date
    current: boolean
    description: string
}

export type ProfileEducationModel = {
    id: string
    school: string
    degree: string
    fieldOfStudy: string
    from: Date
    to: Date
    current: boolean
    description: string
}

export type ProfileSocialModel = {
    youtube: string
    twitter: string
    facebook: string
    linkedin: string
    instagram: string
}