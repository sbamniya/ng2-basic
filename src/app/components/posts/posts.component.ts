import { Component } from '@angular/core';
import { PostServices } from './../services/PostServices';

@Component({
  selector: 'myapp',
  templateUrl: `./posts.component.html`,
  providers: [PostServices]
})
export class PostListComponent {
	posts = [];
	constructor(private postService: PostServices) {
		this.postService.getPosts().subscribe(posts=> {
				this.posts = posts;
		});	
	}

}


