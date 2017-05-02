import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServices } from './../services/PostServices';

@Component({
  	selector: 'myapp',
 	templateUrl: './singleposts.component.html',
  	providers: [PostServices]
})

export class PostDetailComponent implements OnInit, OnDestroy{
	id: number;
  	private sub: any;
  	postDetails = [];
  	postComments = [];

	constructor(private route: ActivatedRoute, private postService: PostServices) {}
	getPostDetails(id){
		this.postService.getPostByID(id).subscribe(posts=> {
			this.postDetails = posts;
		});
		this.postService.getCommentsByPostID(id).subscribe(comments=> {
			this.postComments = comments;
		});
	}
	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];
			this.getPostDetails(this.id);
		});
  	}
	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}