import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/Services/news.service';
import { MatDialog } from '@angular/material/dialog';
import { CompForModalComponent } from '../comp-for-modal/comp-for-modal.component';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  newsData: any | undefined;
  constructor(private newsService: NewsService, 
    public dialog: MatDialog) { }

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

  openModal(url: any) {
    // sending data to modal using service
    this.newsService.sendUrl(url);

    this.dialog.open(CompForModalComponent, { width: '700px', height: '600px'  });
  }
}
