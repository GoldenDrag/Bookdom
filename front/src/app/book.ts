import { Comment } from './comment'

export interface Book {
    id: number;
    author: string;
    title: string;
    description: string;
    comments: Comment[];
}