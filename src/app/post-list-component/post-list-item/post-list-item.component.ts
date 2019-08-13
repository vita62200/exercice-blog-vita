import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PostsService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent   {

  @Input() UnPostTitle: string;
  @Input() UnPostContent: string;
  @Input() UnPostLoveIts: number;
  @Input() UnPostCreatedAt: Date;
  @Input() UnPostId: number;

  constructor(private postsService: PostsService) {}

  onLike() {
    this.postsService.likePostById(this.UnPostId);
  }

  onDislike() {
    this.postsService.dislikePostById(this.UnPostId);
  }

  onDeletePost() {
    this.postsService.removePostById(this.UnPostId);
  }

}
