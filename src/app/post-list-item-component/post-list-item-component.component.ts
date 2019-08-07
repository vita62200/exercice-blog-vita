import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() UnPostTitle: string;
  @Input() UnPostContent: string;
  @Input() UnPostLoveIts: number;
  @Input() UnPostCreatedAt: Date;

  constructor() { }

  ngOnInit() {
  }

  onLike() {
    this.UnPostLoveIts++;
  }

  onDislike() {
    this.UnPostLoveIts--;
  }

}
