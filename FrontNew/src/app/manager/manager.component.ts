import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private articleService: ArticleService) { }
  
  public articles = []
  ngOnInit(): void {
    this.articleService.get().subscribe(data => {
      this.articles = data
      console.log(data)
    })
    
  }
  onDelete(id): void{
    console.log(id)
  }

}
