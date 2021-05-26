import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { Comp1Component } from './Components/comp1/comp1.component';
import { Comp2Component } from './Components/comp2/comp2.component';
import { FormCompComponent } from './Components/form-comp/form-comp.component';
import { NewsService } from './Services/news.service';
import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    Comp1Component,
    Comp2Component,
    FormCompComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [
    NewsService
  ],
  entryComponents: [
    FormCompComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
