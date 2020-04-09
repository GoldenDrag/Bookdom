import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BOOKS } from '../mock-books';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  condition: boolean=true;
     
  toggle(){
      this.condition=!this.condition;
  }

  constructor() {}


ngOnInit(){
   
}



}
