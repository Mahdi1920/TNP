import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticlesService } from '../articles.service';
import { Article } from '../Article';


@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  id:number;
  libelle:string;
  prixMin:number;
  prixMax:number;
  etat:boolean;
  articles:Article[];
  c:Article;
  
  constructor(private articlesService:ArticlesService) { }

  onSubmit(f:NgForm)
  {
    
    this.c=this.articlesService.recherche(this.id);//, this.libelle,this.prixMin,this.prixMax,this.etat); 
    console.log(this.c.id);
    
    
    
    
    
       
      
  }

  ngOnInit() {
    
  }

}
