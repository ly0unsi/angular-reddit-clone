import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostModel } from '../PostModel';
import { faArrowUp,faArrowDown,faComments } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent implements OnInit {
  posts$:Array<PostModel> =[]

  faComments=faComments;
  constructor(private postService:PostService,private router:Router) {
    this.postService.getAllPosts().subscribe(post=>{
      this.posts$=post
    })
  }
  goToPost(id:number):void{
    this.router.navigateByUrl('/view-post/'+id);
  }
  ngOnInit(): void {
  }

}
