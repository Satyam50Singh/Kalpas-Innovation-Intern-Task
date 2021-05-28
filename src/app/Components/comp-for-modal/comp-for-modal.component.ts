import { Component, OnInit } from '@angular/core';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
import { NewsService } from 'src/app/Services/news.service';

@Component({
  selector: 'app-comp-for-modal',
  templateUrl: './comp-for-modal.component.html',
  styleUrls: ['./comp-for-modal.component.scss']
})
export class CompForModalComponent implements OnInit {

  mainurl!: SafeResourceUrl;

  URL!: string;

  constructor(private newsService: NewsService, 
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // getting url from service
    this.newsService.currentUrl.subscribe((url) => {
      this.URL = url;
      this.mainurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.URL);      
    })
  }
}
