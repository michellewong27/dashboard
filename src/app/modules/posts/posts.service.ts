import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class PostsService {
  //api want to use
  apiUrl:string = `https://newsapi.org/v2/everything?q=tesla&from=2021-03-28&sortBy=publishedAt&apiKey=API_KEY`;
  //text with configURL
  configUrl = 'assets/config.json';

  constructor(private http : HttpClient) { }

  
}
