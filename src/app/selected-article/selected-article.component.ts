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
  
  
 
    constructor(private activatedRouter:ActivatedRoute,private articlesService:ArticlesService,private router:Router) { }
  

    

    
    ngOnInit() {
      let id= Number(this.activatedRouter.snapshot.params['id']);
      this.c = this.articlesService.getArticleById(id);
      
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
