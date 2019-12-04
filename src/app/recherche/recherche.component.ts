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
  a:Article;
  x:boolean=false;
  constructor(private articlesService:ArticlesService) { }

  onSubmit(f:NgForm)
  {
    
    this.a=this.articlesService.recherche(this.id); 
    if(this.a!=null)
    {
      this.x=true;
    }
    
    
    
    
    
    
       
      
  }

  ngOnInit() {
    
  }

}
