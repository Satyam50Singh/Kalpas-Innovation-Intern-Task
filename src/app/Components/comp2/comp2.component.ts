import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/Services/news.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  newsData: any;
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadNews()
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
