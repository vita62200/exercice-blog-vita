import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list-component/post-list-component';
import { PostListItemComponent } from './post-list-component/post-list-item/post-list-item.component';
import { NewPostComponent } from './post-list-component/new-post/new-post.component';
import { SinglePostComponent } from './post-list-component/single-post/single-post.component';
import { HeaderComponent } from './header/header.component';
import { PostsService } from './services/post.service';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'new', component: NewPostComponent },
  { path: 'posts/view/:id', component: SinglePostComponent } ,
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    SinglePostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]

})
export class AppModule { }
