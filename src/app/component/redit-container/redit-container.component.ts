import { Component, OnInit ,Input} from '@angular/core';

import {RedditService} from "../../service/reddit-service";

import {Observable} from 'rxjs/Observable';

import {Post} from "../../interface";
import {ResultListItemComponent} from "../result-list-item/result-list.item.component"

@Component({
  selector: 'app-redit-container',
  templateUrl: './redit-container.component.html',
  styleUrls: ['./redit-container.component.sass']
})
export class ReditContainerComponent implements OnInit {

  posts:Post[]; //it holds the data that received from service in observable manner
  postList:Observable<any[]>;
  postName:string="google";

@Input()text1;
  constructor(private redisService:RedditService) { }

  ngOnInit() {
   // this.getDataFromService(this.postName);
   this.postList=this.redisService.posts;
   //this.redisService.getPostList("siva");
  }

//this method handle request and resposne between local component and service component
  getDataFromService(postName:string)
  {

 //this.redisService.getPostList(postName)

  }

}//class ends
