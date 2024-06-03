import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './article';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }

  getArticle(){
    //const headers= new HttpHeaders({Authorization:'Bearer '+this.token});
   return this.http.get<Article>(environment.BaseUrl+"/articles");
  }
}
