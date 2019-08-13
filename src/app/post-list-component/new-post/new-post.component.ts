import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  newPost: FormGroup;

  constructor(private formBuilder: FormBuilder, private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newPost = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost() {
    const title = this.newPost.get('title').value;
    const content = this.newPost.get('content').value;
    const newpost = new Post(title, content);

    this.postsService.createNewPost(newpost);
    this.router.navigate(['/posts']);
  }
}

