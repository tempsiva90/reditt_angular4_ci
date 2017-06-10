import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReditContainerComponent } from './component/redit-container/redit-container.component';
import { SearchContainerComponent } from './component/search-container/search-container.component';
import { SearchComponent } from './component/search-component/search-component';
import { ResultContainerComponent } from './component/result-container/result-container.component';
import { ResultListItemComponent } from './component/result-list-item/result-list.item.component';

import {HttpModule,JsonpModule} from "@angular/http";

import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import {RedditService} from "./service/reddit-service";

import { RedditdetailComponent } from './component/redditdetail/redditdetail.component';

import { RedditappComponent } from './redditapp/redditapp.component';

import { RedditRoutingModule } from './reddit.routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import{AppMaterialModule} from "./material"

import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { SnakComponentComponent } from './component/snak-component/snak-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ReditContainerComponent,
    SearchContainerComponent,
    SearchComponent,
    ResultContainerComponent,
    ResultListItemComponent,
    RedditdetailComponent,
    RedditappComponent,
    PageNotFoundComponent,
    SnakComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    MdButtonModule, MdCheckboxModule,
    RedditRoutingModule

  ],
  providers: [RedditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
