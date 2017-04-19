import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './components/posts/posts.component';
import { PostDetailComponent  } from './components/posts/single.post.component';
import { PageNotFoundComponent  } from './components/posts/404.component';

/*Routes*/
const appRoutes: Routes = [
  { 
    path: 'post/:id',
    component: PostDetailComponent 
  },
  {
    path: 'posts',
    component: PostListComponent,
    data: { title: 'Heroes List' }
  },
  { 
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
   }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PostListComponent,
    PostDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
