import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReditContainerComponent } from './component/redit-container/redit-container.component';
import { SearchContainerComponent } from './component/search-container/search-container.component';
import { SearchComponentComponent } from './component/search-component/search-component.component';
import { ResultContainerComponent } from './component/result-container/result-container.component';
import { ResultListItemComponent } from './component/result-list-item/result-list.item.component';

import {HttpModule,JsonpModule} from "@angular/http";

import {RedditService} from "./service/reddit-service";

@NgModule({
  declarations: [
    AppComponent,
    ReditContainerComponent,
    SearchContainerComponent,
    SearchComponentComponent,
    ResultContainerComponent,
    ResultListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule

  ],
  providers: [RedditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
