import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { global } from '../../services/global';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService, UserService]
})
export class HomeComponent implements OnInit {
  public page_title:string;
  public url;
  public posts: Array<Post>;
  public token;

  constructor(
  	private _postService: PostService,
    ) { 
      this.page_title = 'ADN Detector';
      this.url = global.url;
    }

  ngOnInit() {
  }
}
