import { Component, OnInit } from '@angular/core';
import { } from '@angular/forms';
@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.css']
})
export class AjoutArticleComponent implements OnInit {
id:number;
lib:string="";
src:string="";
prix:number;
date:Date;
etat:string="";
vitesse:number;
couleur:string="";

  constructor() { }
  
  
  ngOnInit() {
  }

}
