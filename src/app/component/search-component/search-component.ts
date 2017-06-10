import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

import {RedditService} from "../../service/reddit-service";

import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'search-component',
  templateUrl: './search-component.html',
  styleUrls: ['./search-component.sass']
})
export class SearchComponent implements OnInit {

rForm:FormGroup;

redditSearch:string=""; //reddit search element


  constructor(private fb:FormBuilder,private redditService:RedditService) { 

    this.rForm=fb.group(
      {
        "redditSearch":[null,Validators.compose([Validators.required,Validators.minLength(5)])]
      }
    );
  }

//======================================================
  ngOnInit() {

    //subscribe to search input form element's value changes
    this.rForm.get("redditSearch").valueChanges
    .debounceTime(300)
    .distinctUntilChanged()
   .filter(data=>data.length>4)
    .subscribe(newRedditSearchText=> {
      console.log(newRedditSearchText);
      this.callServiceGetPost(newRedditSearchText);


    });
  }

//
triggerGetPost(formValue)
{
console.log(formValue.redditSearch)
this.callServiceGetPost(formValue.redditSearch);
}

callServiceGetPost(searchText)
{
  this.redditService.getPostList(searchText)
}

} //class ends
