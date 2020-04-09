import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import {Router} from '@angular/router';
import { BOOKS } from '../mock-books';
import { Book } from '../book';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private bookService: BookService,private router: Router) { }

  books: Book[] = BOOKS;
  selectedBook: Book = this.books[0];
  OnSelect(book: Book): void {
    this.selectedBook = book;
  }



  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  goBack(){
    this.router.navigate(['']);
}

}
