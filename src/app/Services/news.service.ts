import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url = "https://api.first.org/data/v1/news/";

  constructor(private http: HttpClient) { }

  getNews(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
