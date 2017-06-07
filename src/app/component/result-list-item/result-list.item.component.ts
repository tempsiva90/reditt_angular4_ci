import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'result-list-item',
  templateUrl: './result-list.item.component.html',
  styleUrls: ['./result-list.item.component.sass']
})
export class ResultListItemComponent implements OnInit {

@Input()post:any;
  constructor() { }

  ngOnInit() {
  }

}
