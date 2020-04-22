import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private articleService: ArticleService) { }
  
  public articleModel = {
    title: '',
    author: '',
    text: ''
  } 
  ngOnInit(): void {
  }
  onCreate(): void{
    console.log(this.articleModel)
    this.articleService.set(this.articleModel)
  }

}
