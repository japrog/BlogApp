import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

	@Input() title;
	@Input() content;
	@Input() loveIts;
	@Input() createdAt;
	@Input() Post;

	isLove:boolean = false;
	post:Object = {};

  constructor() {}

  ngOnInit() {
  }

  onUpdateLoveItsUp() {
  	this.loveIts++;
  }

  onUpdateLoveItsDown() {
  	this.loveIts--;
  }
}