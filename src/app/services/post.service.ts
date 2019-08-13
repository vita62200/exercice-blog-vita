import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase/app';
import 'firebase/database';

@Injectable()
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) {
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/Posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/Posts')
    .on('value', snap => {
        this.posts = snap.val() ? snap.val() : [];
        this.emitPosts();
      }
    );
  }

  getSinglePost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/Posts/' + id).once('value').then(
          (data: any) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewPost(newPost: Post) {
    this.posts = this.posts || [];
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if ( postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  removePostById(postIndexToRemove: number) {
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  likePostById(i: number) {
    this.posts[i].loveIts++;
    this.savePosts();
    this.emitPosts();
  }

  dislikePostById(i: number) {
    this.posts[i].loveIts--;
    this.savePosts();
    this.emitPosts();
  }

}
