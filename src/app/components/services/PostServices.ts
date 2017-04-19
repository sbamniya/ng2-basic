import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostServices {
	
	constructor(private http: Http) {
		// code...
	}

	getPosts(){
		return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
	}
}