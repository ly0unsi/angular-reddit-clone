import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './post/create-posts/create-posts.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { CreteSubredditComponent } from './subreddit/crete-subreddit/crete-subreddit.component';
import { ListSubredditsComponent } from './subreddit/list-subreddits/list-subreddits.component';

const routes: Routes = [

  {path:'view-post/:id',component:ViewPostComponent},
  {path:'',component:HomeComponent},
  {path:'sign-up',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'create-subreddit',component:CreteSubredditComponent},
  {path:'create-post',component:CreatePostComponent},
  {path:'list-subreddits',component:ListSubredditsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
