import { Injectable } from '@angular/core';

import{Jsonp} from '@angular/http';

import {Observable} from "rxjs/Observable"

import 'rxjs/add/operator/map';

import {Post} from "../interface"

@Injectable()
export class RedditService {

url="https://www.reddit.com";
  constructor(private jsonp:Jsonp) { }


//getPost()
//this function used to receive reddit post using observable
//its accept post name as argument

getPost(postName):Observable<Post[]>{

  return this.jsonp.get(this.url+"/r/"+postName+
  "/.json?jsonp=JSONP_CALLBACK")
  .map(data=>{
      var posts:Post[]=[];
      let children=data.json().data.children;
      children.forEach((element,index) => {
        posts.push(element.data)
      
      });
      return posts; //returning post data to calling component
  });

}//getpost ends



} //service class ends
