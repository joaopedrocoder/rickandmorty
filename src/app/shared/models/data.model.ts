import { IInfo } from "./info.model"

export interface IData<T> {
    info: IInfo
    results: T[]
}