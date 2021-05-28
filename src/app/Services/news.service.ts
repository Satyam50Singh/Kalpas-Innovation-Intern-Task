import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  // API URL
  url = "https://api.first.org/data/v1/news/";

  // public subject = new Subject<any>();

  public editDataDetails : any = [];
  private urlSource = new BehaviorSubject(this.editDataDetails);

  currentUrl = this.urlSource.asObservable();

  constructor(private http: HttpClient) { }

  getNews(): Observable<any>{
    return this.http.get<any>(this.url);
  }

  // receiving url from Component 
  sendUrl(url: string) {
    console.log(url)
    this.urlSource.next(url);
  }

}
