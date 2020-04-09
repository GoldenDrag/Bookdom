import { Component, OnInit } from '@angular/core';
import { BOOKS } from '../mock-books';
import { Book } from '../book';
import { BookService } from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  // book: Book = {
  //   id: 16,
  //   author: 'Warcada',
  //   title: 'Wacky'
  // }
  books: Book[] = BOOKS;
  selectedBook: Book = this.books[0];
  OnSelect(book: Book): void {
    this.selectedBook = book;
    this.router.navigate(['about'])
  }


  constructor(private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  goHome(){
    this.router.navigate(['post']);
}

}
