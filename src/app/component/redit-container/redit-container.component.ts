import { Component, OnInit ,Input} from '@angular/core';

import {RedditService} from "../../service/reddit-service";

import {Post} from "../../interface";
import {ResultListItemComponent} from "../result-list-item/result-list.item.component"

@Component({
  selector: 'app-redit-container',
  templateUrl: './redit-container.component.html',
  styleUrls: ['./redit-container.component.sass']
})
export class ReditContainerComponent implements OnInit {

  posts:Post[]; //it holds the data that received from service in observable manner

  postName:string="google";

@Input()text1;
  constructor(private redisService:RedditService) { }

  ngOnInit() {
    this.getDataFromService(this.postName);
   
  }

//this method handle request and resposne between local component and service component
  getDataFromService(postName:string)
  {
    //subscribing to service's get[post method 
 this.redisService.getPost(postName).subscribe(postData=>
    {
      this.posts=postData;
      console.log("this.posts",this.posts);

    });
  }

}//class ends
