
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Post } from '../posts/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  articles: Post[] = [];
  openedArticle: Object = {};
  articleOpen:boolean = true;
  articleContent: string = '';
  articleTitle: string = '';
  apiUrl: string = 'https://newsapi.org/v2/top-headlines?country=us&q=covid&from=2021-03-28&sortBy=publishedAt&apiKey='
  apiKey : string = 'b0007f2a7ae04cbaa585b2b20903763f'

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getArticles()
  }

  getArticles(){
    this.httpClient.get<any>(this.apiUrl + this.apiKey).subscribe(resp => {
      this.articles = resp.articles;
    })
  }

  openArticle(articleTitle:string, articleContent:string){
    this.articleOpen = !this.articleOpen;
    this.articleTitle = articleTitle;
    this.articleContent = articleContent;  
  }

}
