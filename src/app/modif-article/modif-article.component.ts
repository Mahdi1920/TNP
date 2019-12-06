import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-modif-article',
  templateUrl: './modif-article.component.html',
  styleUrls: ['./modif-article.component.css']
})
export class ModifArticleComponent implements OnInit {

  id:number;
libelle:string;
image:string;
prix:number;
date:Date;
etat:boolean;
vitesse:number;
couleur:string;
hp:number;
convetat:string;

  constructor(private articlesService:ArticlesService) { }
  onSubmit(f:NgForm)
  {

    if(this.convetat=="true")
    {
      this.etat=true;
    }
    else
      this.etat=false;

    this.articlesService.modifCar(this.id, this.libelle, this.image,  this.prix,this.couleur,this.vitesse,
       this.etat, this.date, this.hp);  
    }
 

  ngOnInit() {
  }

}
