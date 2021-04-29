
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
  articleDescription:string ='';
  articleImg:string = '';
  apiUrl: string = 'https://newsapi.org/v2/top-headlines?country=us&q=covid&sortBy=publishedAt&apiKey='
  apiKey : string = 'b0007f2a7ae04cbaa585b2b20903763f'

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getArticles()
  }

  getArticles(){
    this.httpClient.get<any>(this.apiUrl + this.apiKey).subscribe(resp => {
      this.articles = resp.articles;
       console.log(this.articles)
    })
   
  }

  openArticle(articleTitle:string, articleDescription:string, articleContent:string, articleImg:string){
    this.articleOpen = !this.articleOpen;
    this.articleTitle = articleTitle;
    this.articleDescription = articleDescription;
    this.articleContent = articleContent;  
    this.articleImg= articleImg;
  
  }

  backToHomepage(){
    this.articleOpen = !this.articleOpen;
  }

}