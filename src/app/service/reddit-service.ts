import { Injectable } from '@angular/core';

import{Jsonp} from '@angular/http';

import {Observable} from "rxjs/Observable"
;
import {BehaviorSubject} from "rxjs/BehaviorSubject"

import 'rxjs/add/operator/map';

import {Post} from "../interface"

@Injectable()
export class RedditService {
    public redditLogoPath="assets/reddit_logo.jpg"
    posts:Observable<any[]>;
    public selectedPost
    private dataStrore={posts:[]}
    private _posts: BehaviorSubject<any[]>;

    url="https://www.reddit.com";

  constructor(private jsonp:Jsonp) {

    this.dataStrore.posts=[];
    this._posts = <BehaviorSubject<any[]>>new BehaviorSubject([]);

    this.posts = this._posts.asObservable();
   }




getPostList(postName){
  console.log("data ca;;ed2");
  
  this.jsonp.get(this.url+"/r/"+postName+
    "/.json?jsonp=JSONP_CALLBACK")
  .map(response=>  {
            this.dataStrore.posts=[];//clearing post list if new result requested by user either by click or debuounce reached
            return response.json();
  })
  //.switchMap(data)
  .subscribe(data=>{
    console.log("data ca;;ed");
    console.log(data);
      
    let children=data.data.children//.json().data.children;
    children.forEach((element,index) => {
      
      if(!element.data.thumbnail || element.data.thumbnail=="self" || element.data.thumbnail=="default")   {   
          element.data.thumbnail= this.redditLogoPath
      }
  
      this.dataStrore.posts.push(element.data)
      
      this._posts.next(Object.assign({},this.dataStrore).posts);
      
      });
    
  },error=>
  {
    console.error("error in getpost",error)
  });

}//getpostList ends


getPost(post_id)
{
  this.selectedPost=null;
 // let post_id;
  //return this.dataStrore.posts[0];
  return this.dataStrore.posts.map(post=>
  {
    
    if(post.id==post_id)
    {
      console.log(post)
      this.selectedPost=post;
      return post;
    }
  })
}



} //service class ends
