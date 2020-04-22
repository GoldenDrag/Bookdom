import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from './IArticle'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  url = 'assets/news.json'
  httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  get(): Observable<Article[]>{
    return this.http.get<Article[]>(this.url)
  }
  set(article: Article): Observable<Article>{
    return this.http.post<Article>(this.url,article, this.httpHeaders)
  }
  delete(id: Number): Observable<Article>{
    return this.http.delete<Article>(this.url + '/' + id)
  }
}

