import { INameUrl } from "../../../shared/models/name-url.model"

export interface ICharacter {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: INameUrl
    location: INameUrl
    image: string
    episode: string[]
    url: string
    created: Date
}