import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
console.log(Http)

@Component({
  selector: 'myapp',
  template: '<p>Totally tested list!</p>'
})
export class PostListComponent {
		
	constructor(private http: Http) {
		var data = this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
		data.subscribe(posts=>{
			console.log(posts);
		})
	}
}


