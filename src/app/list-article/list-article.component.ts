import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css'
})
export class ListArticleComponent implements OnInit {

listarticle:any;
  constructor(private article:ArticleService,private router :Router) { }
  ngOnInit(): void {
this.refrech();
  }
  refrech(){
    this.article.getArticle().subscribe((data)=>
      {
        console.log(data);
       this.listarticle=data;
      },
      error=>console.error(error));
    }
    goAddArticle(){
this.router.navigate(["ajoutarticle"]);
    }

}
