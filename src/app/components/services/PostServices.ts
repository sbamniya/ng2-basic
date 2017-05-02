import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostServices {
	host = 'https://jsonplaceholder.typicode.com/';
	constructor(private http: Http) {
		// code...
	}

	getPosts(){
		return this.http.get(this.host+'posts').map(res => res.json());
	}
	getPostByID(id){
			return this.http.get(this.host+'posts/'+id).map(res => res.json());
	}
	getCommentsByPostID(id){
		return this.http.get(this.host+'posts/'+id+'/comments').map(res => res.json());
	}
}