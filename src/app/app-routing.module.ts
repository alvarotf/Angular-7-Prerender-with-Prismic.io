import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoPrerenderComponent } from './no-prerender/no-prerender.component';
import { TestBlogPostComponent } from './test-blog-post/test-blog-post.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
      { path: 'no-prerender', component: NoPrerenderComponent },
      { path: 'test-blog-post', component: TestBlogPostComponent }
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
