import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { NoPrerenderComponent } from './no-prerender/no-prerender.component';
import { AppRoutingModule } from './app-routing.module';
import { TestBlogPostComponent } from './test-blog-post/test-blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoPrerenderComponent,
    TestBlogPostComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    AppRoutingModule,
    TransferHttpCacheModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
