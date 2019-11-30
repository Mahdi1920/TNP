import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ArticlesService } from '../articles.service';
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

  constructor(private articlesService:ArticlesService) { }
  onSubmit(f:NgForm)
  {
    this.articlesService.addCar(this.id, this.libelle, this.image,  this.prix,this.couleur,this.vitesse,
       this.etat, this.date, this.hp);      
        
       
      
  }
  ngOnInit() {
    
  }

}
