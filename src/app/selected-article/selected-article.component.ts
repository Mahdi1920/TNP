import { Component, OnInit } from '@angular/core';
import { Article } from '../Article';
import { ArticlesService} from '../articles.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-selected-article',
  templateUrl: './selected-article.component.html',
  styleUrls: ['./selected-article.component.css']
})
export class SelectedArticleComponent implements OnInit {
  id:number;
  c: Article;
  eur1:string="";
  usd1:string="";
  tnd1:string="";

  libelle:string;
image:string;
prix:number;
date:Date;
etat:boolean;
vitesse:number;
couleur:string;
hp:number;

  
 
    constructor(private activatedRouter:ActivatedRoute,private articlesService:ArticlesService) { }
    
    ngOnInit() {
      this.id= this.activatedRouter.snapshot.params['id'];
      this.c = this.articlesService.getArticleById(this.id);
      this.libelle=this.c.libelle;
      this.image=this.c.image;
      this.prix=this.c.prix;
      this.date=this.c.date;
      this.etat=this.c.etat;
      this.vitesse=this.c.vitesse;
      this.couleur=this.c.couleur;
      this.hp=this.c.hp;
    }

    conveur  (prix:number){
       let eur=(this.c.prix*0.91).toFixed(2);
       this.eur1=eur.toString()
       this.tnd1="";
       this.usd1="";
    }

    convusd  (prix:number){
       let usd=(this.c.prix).toFixed(2);
       
       this.usd1=usd.toString()
       this.tnd1="";
       this.eur1="";
    }

    convtnd  (prix:number){
      let tnd=(this.c.prix*2.85).toFixed(3);
      this.tnd1=tnd.toString()
      this.eur1="";
      this.usd1="";
   }    

  }
