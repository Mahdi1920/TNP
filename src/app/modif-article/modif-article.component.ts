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

  constructor(private articlesService:ArticlesService) { }
  onSubmit(f:NgForm)
  {
    this.articlesService.modifCar(this.id, this.libelle, this.image,  this.prix,this.couleur,this.vitesse,
       this.etat, this.date, this.hp);  
      // console.log("-- "+f.value['id']+" "+ f.value['lib']);    
      /*this.articlesService.modifCar(f.value['id'], f.value['lib'], f.value['image'],  f.value['prix'],f.value['couleur'],f.value['vitesse'],
        f.value['etat'], f.value['date'], f.value['hp']);  */
  }
 

  ngOnInit() {
  }

}
