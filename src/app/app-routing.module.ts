import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ErreurauthComponent } from './erreurauth/erreurauth.component';
import { ErreurComponent } from './erreur/erreur.component';
import { ErreurmdpComponent } from './erreurmdp/erreurmdp.component';
import { MenuComponent } from './menu/menu.component';
import { ArticlesComponent } from './articles/articles.component';
import { RechercheComponent } from './recherche/recherche.component';
import { SelectedArticleComponent } from './selected-article/selected-article.component';
import { ModifArticleComponent } from './modif-article/modif-article.component';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { SupprimerArticleComponent } from './supprimer-article/supprimer-article.component';


const routes: Routes = [
 
  {path:'authentification', component:AuthentificationComponent},
  {path:'erreurauth', component:ErreurauthComponent},
  {path:'erreurmdp', component:ErreurmdpComponent},
  {path:'menu', component:MenuComponent},
  {path:'ajout', component:AjoutArticleComponent},
  {path:'modif', component:ModifArticleComponent },
  {path:'selectedArticle/:id', component:SelectedArticleComponent},
  {path:'recherche', component: RechercheComponent},
  {path:'articles', component:ArticlesComponent },
  {path:'supprimerArticle', component:SupprimerArticleComponent },
  {path:'', redirectTo:'authentification' , pathMatch:'full'},
  {path:'**', component:ErreurComponent} 

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
