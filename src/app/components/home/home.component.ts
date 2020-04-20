import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title: string;
  public articles: Article[];
  public url: string;
  constructor(
    private _articleService: ArticleService
  ) { 
    this.title= 'Últimos artículos';
    this.url= Global.url;
  }

  ngOnInit(): void {
    this._articleService.getArticles(true).subscribe(
      response => {
        
        if (response.articles) {
          this.articles= response.articles;
        }
      },
      error => {
        console.log(error);
      }

    );
  }

}
