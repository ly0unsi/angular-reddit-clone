import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { SubredditService } from '../subreddit.service';
import { SubredditModel } from '../subredditResponse';

@Component({
  selector: 'app-crete-subreddit',
  templateUrl: './crete-subreddit.component.html',
  styleUrls: ['./crete-subreddit.component.css']
})
export class CreteSubredditComponent implements OnInit {
  createSubredditForm: FormGroup;
  subredditModel: SubredditModel;
  title = new FormControl('');
  description = new FormControl('');
  constructor(private router :Router,private subredditService:SubredditService) {
    this.createSubredditForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.subredditModel = {
      name: '',
      description: ''
    }
  }

  ngOnInit(): void {
  }
  discard(){
    this.router.navigateByUrl('/')
  }
  createSubreddit() {
    this.subredditModel.name = this.createSubredditForm.get('title')
    ?.value;
    this.subredditModel.description = this.createSubredditForm.get('description')
    ?.value
    this.subredditService.createSubreddit(this.subredditModel).subscribe(data => {
      this.router.navigateByUrl('/list-subreddits');
    }, error => {
      throwError(error);
    })
  }
}
