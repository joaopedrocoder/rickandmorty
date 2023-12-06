import { INameUrl } from "../../../shared/models/name-url.model"

type Gender = 'female' | 'male' | 'genderless' | 'unknown'

type Status = 'alive' | 'dead' | 'unknown'

export interface ICharacter {
    id: number
    name: string
    status: Status
    species: string
    type?: string
    gender: Gender
    origin: INameUrl
    location: INameUrl
    image: string
    episode: string[]
    url: string
    created: Date
}