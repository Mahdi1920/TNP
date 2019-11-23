import { Component, OnInit } from '@angular/core';
import { Article } from '../Article';
import { ArticlesService} from '../articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
lesArticles:Article[];
  constructor(private articleservice:ArticlesService) { }

  ngOnInit() {
    this.lesArticles = this.articleservice.articles;
  }

}
