import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  getArticles():Observable<any>{
    return this._http.get(this.url+'articles');
  }
}
