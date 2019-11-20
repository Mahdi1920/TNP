import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ErreurauthComponent } from './erreurauth/erreurauth.component';
import { ErreurComponent } from './erreur/erreur.component';
import { ErreurmdpComponent } from './erreurmdp/erreurmdp.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MenuComponent } from './menu/menu.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { SelectedArticleComponent } from './selected-article/selected-article.component';
import { ModifArticleComponent } from './modif-article/modif-article.component';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    ErreurauthComponent,
    ErreurComponent,
    ErreurmdpComponent,
    AcceuilComponent,
    MenuComponent,
    ArticlesComponent,
    ArticleComponent,
    SelectedArticleComponent,
    ModifArticleComponent,
    AjoutArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
