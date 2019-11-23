import { Injectable } from '@angular/core';
import { Article } from './Article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articles = [     
    new Article(10, 'Bugatti', '../assets/chiron.jpg', 2998000, true,new Date(2017,10,7)),
    new Article(11,'Lamborghini',  '../assets/aventador.jpg', 393695,true,new Date(2015,10,7)),
    new Article(12, 'Tesla', '../assets/tesla.jpg',151020, true,new Date(2019,7,10)), 
    new Article(13, '206', '../assets/206.jpg',3000, false,new Date(2003,10/7)),     
    new Article(14,'4l','../assets/4l.jpg', 2000,false,new Date(1969,10,7))
  ];
  constructor() { }


  getArticleById(m:number):Article
  {
    for(let a of this.articles)
      if(a.id===m)
        return a ;
  }
}
