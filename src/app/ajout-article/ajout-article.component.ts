import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticlesService } from '../articles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../Article';
@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.css']
})
export class AjoutArticleComponent implements OnInit {
id:number;
libelle:string;
image:string;
prix:number;
date:Date;
etat:boolean;
vitesse:number;
couleur:string;
hp:number;
c:Article;
convetat:string;
  
  constructor(private activatedRouter:ActivatedRoute,private articlesService:ArticlesService,private router:Router) { }
  onSubmit(f:NgForm)
  {
    if(this.convetat=="true")
    {
      this.etat=true;
    }
    else
      this.etat=false;

    this.articlesService.addCar(this.id, this.libelle, this.image,  this.prix,this.couleur,this.vitesse,
       this.etat, this.date, this.hp);   
     //console.log("-- "+f.value['etat'])  
  }
  ngOnInit() {
    this.c = this.articlesService.getArticleById(this.id);
}
}