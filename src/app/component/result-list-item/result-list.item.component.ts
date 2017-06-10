import { Component, OnInit ,Input} from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'result-list-item',
  templateUrl: './result-list.item.component.html',
  styleUrls: ['./result-list.item.component.sass']
})
export class ResultListItemComponent implements OnInit {
redditLogo="assets/reddit_logo.jpg"
@Input()post:any;
  constructor(private router: Router) { }

  ngOnInit() {
  }


showDetail(post)
{
 
this.router.navigate(['reddit',post.id])
}
}
