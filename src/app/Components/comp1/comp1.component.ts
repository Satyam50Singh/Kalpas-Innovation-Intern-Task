import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsService } from 'src/app/Services/news.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  newsData: any | undefined;
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadNews();     
  }

  loadNews() {
    this.newsService.getNews()
      .subscribe((data: any) => {
        console.log(data);
        this.newsData = data.data;
      }) 
  }

  deleteNews(val: any) {
    this.newsData.splice(val,1);
  }
}
