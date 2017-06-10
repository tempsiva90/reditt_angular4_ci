import { Component, OnInit,AfterViewInit } from '@angular/core';
import{ActivatedRoute,Router} from "@angular/router";
import {MdSnackBar} from '@angular/material';
import { SnakComponentComponent } from '../snak-component/snak-component.component';

import {RedditService} from "../../service/reddit-service";
@Component({
  selector: 'app-redditdetail',
  templateUrl: './redditdetail.component.html',
  styleUrls: ['./redditdetail.component.sass']
})
export class RedditdetailComponent implements OnInit,AfterViewInit {
private post
  constructor(public snackBar: MdSnackBar,
              private redditService:RedditService,
              private route: ActivatedRoute,
              private router: Router,) { }

  ngOnInit() {
   
   this.route.params.subscribe(param=>
   {
     console.log("param ID",param['id'])
     this.post=this.redditService.getPost(param['id']);
   })
  }
ngAfterViewInit()
{

//let snackBarRef = this.snackBar.open('You are in reddit detail page');
}
}
