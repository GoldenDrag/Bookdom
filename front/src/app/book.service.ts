import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';
import { Observable, of } from 'rxjs';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { Author } from './author';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Observable<Book[]> {
    return of(BOOKS);
  }

  getBook(id: number): Observable<Book> {
    // TODO: send the message _after_ fetching the hero
    return of(BOOKS.find(book => book.id === id));  
  }

}
