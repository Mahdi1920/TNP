import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticlesService } from '../articles.service';


@Component({
  selector: 'app-supprimer-article',
  templateUrl: './supprimer-article.component.html',
  styleUrls: ['./supprimer-article.component.css']
})
export class SupprimerArticleComponent implements OnInit {
 id:number;
  constructor(private articlesService:ArticlesService) { }
  onSubmit(f:NgForm)
  {
    this.articlesService.supprimerCar(this.id,);      
  }
 


  ngOnInit() {
  }

}
