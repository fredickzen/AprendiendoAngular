import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  public url: string;
  constructor(
    private _http: HttpClient
  ) { 
    this.url= Global.url;
  }

  pruebas(){
    return this.url;
  }
  getArticles(last:any = null):Observable<any>{
    var articles= 'articles';
    if (last != null) {
     articles= 'articles/true';
    }
    return this._http.get(this.url+articles);
  }

  getArticle(articleId):Observable<any>{
    return this._http.get(this.url+'article/'+articleId);
  }
  search(searchString):Observable<any>{
    return this._http.get(this.url+'search/'+searchString);
  }
  create(article):Observable<any>{
    let params =  JSON.stringify(article);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url+'save', params, { headers:headers});
    }
}
