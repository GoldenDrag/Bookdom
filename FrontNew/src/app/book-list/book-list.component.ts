import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private articleService: ArticleService) { }
  
  public articles = []
  ngOnInit(): void {
    this.articleService.get().subscribe(data => {
      this.articles = data
      console.log(data)
    })
    

    }

}
