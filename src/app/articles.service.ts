import { Injectable } from '@angular/core';
import { Article } from './Article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articles = [     
    new Article(10, 'Bugatti', '../assets/chiron.jpg', 2998000, "red", 493,true,new Date(2017,10,7),1600),
    new Article(11,'Lamborghini',  '../assets/aventador.jpg', 393695,"orange", 350,true,new Date(2015,10,7),750),
    new Article(12, 'Tesla', '../assets/tesla.jpg',151020, "gray", 250,true,new Date(2019,7,10),400), 
    new Article(13, '206', '../assets/206.jpg',3000,"grey", 190, false,new Date(2003,10/7),35),     
    new Article(14,'4l','../assets/4l.jpg', 2000,"white", 127,false,new Date(1969,10,7),20)
  ];

    
    articlesR:Article[];
  constructor() { }


  getArticleById(m:number):Article
  {
    for(let a of this.articles)
      if(a.id===m)
        return a ;
        else 
        return null;
        
  }

  testId(id:number):boolean
  {
    let test:boolean=false;
    for(let i=0;i<this.articles.length;i++)
    {
      if(id==this.articles[i].id)
      {
        test=true;
      }
    }
    return test;
  }


 addCar (id:number, model:string, image:string,  prix:number,color:string,vitesse:number,etat:boolean, date:Date, hp:number,):boolean
  {
    if(this.testId(id)==false)
    {
      this.articles.push(new Article(id, model, image,  prix,color,vitesse,etat, date, hp));
      alert("your car is successfully added");
      return true;
    }
    else
      {
        alert("Id is already used");
        return false;
      }
    }
   
  
    

  supprimerCar (id:number,):boolean
  {
    if(this.testId(id)==false)
    {
      alert("car not found");
      return false;
    }
    else
    {
      for(let i=0;i<this.articles.length;i++)
      {
        if(id==this.articles[i].id)
        {
          var x=i;
        }
      }
      this.articles.splice(x,1);
      
      alert("your car has been deleted");
      return true;
    }

      
  }
   
  

    modifCar (id:number, model:string, image:string,  prix:number,color:string,
      vitesse:number,etat:boolean, date:Date, hp:number,):boolean
      {
        let test:boolean=false;

        if (id==null)
        {
          alert("Id is required");
          return false;
        }
        else if(this.testId(id)==false)
        {
          alert("Car is not found .. please verify your Id");
          return false;
        }
        else 
        {
          
          let art=this.getArticleById(id);
          if(model!=null)
          {
            let obj=this.getArticleById(id);
            obj.libellee(model);
            test=true;
          }

          if(image!=null)
          {
            let obj=this.getArticleById(id);
            obj.imagee(image);
            test=true;
          }

          if(prix!=null)
          {
            let obj=this.getArticleById(id);
            obj.prixx(prix);
            test=true;
          }

          if(color!=null)
          {
            let obj=this.getArticleById(id);
            obj.colorr(color);
            test=true;
          }

          if(vitesse!=null)
          {
            let obj=this.getArticleById(id);
            obj.vitessee(vitesse);
            test=true;
          }

          if(etat!=null)
          {
            let obj=this.getArticleById(id);
            obj.etatt(etat);
            test=true;
          }

          if(date!=null)
          {
            let obj=this.getArticleById(id);
            obj.datee(date);
            test=true;
          }


          if(hp!=null)
          {
            let obj=this.getArticleById(id);
            obj.hpp(hp);
            test=true;
          }

        }
        if(test==false)
          {
            alert("nothing has been modified");
          }

          if(test==true)
          {
            alert("your car has been modified");
          }
          return test;
      }








      recherche(id/*, libelle,prixMin,prixMax,etat*/):Article
      {
          if(id!=null)
          {
            if(this.testId(id)==true)
            {
              //this.articlesR.push(this.getArticleById(id));           
              return this.getArticleById(id);
            }
          
            else if(this.testId(id)==false)
            {
              alert("car not found");
            }
          }
      }















}




