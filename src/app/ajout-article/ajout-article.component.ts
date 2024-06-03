import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../providers.service';
import { Article } from '../article';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrl: './ajout-article.component.css'
})
export class AjoutArticleComponent implements OnInit{
  idprovider!:number;
  Listprovider:any;

  constructor(private provider:ProvidersService) { }
  ngOnInit(): void {
    this.provider.getprovider().subscribe((data)=>
      {
  this.Listprovider=data;
      })
    }
    ajoutArticle(articleForm:any){
      let article:Article={
        label:articleForm.label,
        price:articleForm.price,
        picture:articleForm.picture
      }

      this.idprovider=articleForm.providernbr;
      console.log(this.idprovider);
      }
      }



