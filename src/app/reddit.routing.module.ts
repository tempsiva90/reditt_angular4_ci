import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RedditappComponent } from './redditapp/redditapp.component';

import { ReditContainerComponent } from './component/redit-container/redit-container.component';
import { SearchContainerComponent } from './component/search-container/search-container.component';
import { SearchComponent } from './component/search-component/search-component';
import { ResultContainerComponent } from './component/result-container/result-container.component';
import { ResultListItemComponent } from './component/result-list-item/result-list.item.component';
import { RedditdetailComponent } from './component/redditdetail/redditdetail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {HttpModule,JsonpModule} from "@angular/http";

import  {RouterModule,Routes} from "@angular/router";


import {RedditService} from "./service/reddit-service";

//declaring all routes with its path and target component
const redditRoutes:Routes=[
  {
    path:"",
    redirectTo:"/reddit",
    pathMatch:"full"
  },
   {
    path:"reddit",
    component:RedditappComponent
  },
  {
    path:"reddit/:id",
    component:RedditdetailComponent
  }
  ,
  { path: '**', component: PageNotFoundComponent }
]


@NgModule({
  
  imports: [
    RouterModule.forRoot(redditRoutes)
   

  ],
  exports: [
    RouterModule
  ]
  
})
export class RedditRoutingModule { }
