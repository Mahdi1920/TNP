import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ErreurauthComponent } from './erreurauth/erreurauth.component';
import { ErreurComponent } from './erreur/erreur.component';
import { ErreurmdpComponent } from './erreurmdp/erreurmdp.component';

import { MenuComponent } from './menu/menu.component';
import { ArticlesComponent } from './articles/articles.component';

import { SelectedArticleComponent } from './selected-article/selected-article.component';
import { ModifArticleComponent } from './modif-article/modif-article.component';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { SupprimerArticleComponent } from './supprimer-article/supprimer-article.component';
import { RechercheComponent } from './recherche/recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    ErreurauthComponent,
    ErreurComponent,
    ErreurmdpComponent,
    
    MenuComponent,
    ArticlesComponent,
   
    SelectedArticleComponent,
    ModifArticleComponent,
    AjoutArticleComponent,
    SupprimerArticleComponent,
    RechercheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
