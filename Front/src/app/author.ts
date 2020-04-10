import { Book } from './book'

export interface Author {
    id: number,
    firstName: string,
    lastName: string,
    nickName: string,
    mail: string,
    works: Book[]
}