import { Component, OnInit } from '@angular/core';
import { PrismicService } from '../services/prismic.service';
import { AsyncApiCallHelperService } from '../services/async-api-call-helper.service';
// tslint:disable-next-line:import-blacklist
import {take} from 'rxjs/operators';
import { TransferStateHelperService } from '../services/transfer-state-helper.service';
import { StateKey, makeStateKey } from '@angular/platform-browser';
import { Document } from 'prismic-javascript/d.ts/documents';
import { from } from 'rxjs';

@Component({
  selector: 'app-test-blog-post',
  templateUrl: './test-blog-post.component.html',
  styleUrls: ['./test-blog-post.component.scss']
})
export class TestBlogPostComponent implements OnInit {

  title: string;
  contentHtml: string;
  blogPostDataKey: StateKey<Document>;
  constructor(
    private prismic: PrismicService,
    private asyncApiCallHelper: AsyncApiCallHelperService,
    private transferState: TransferStateHelperService
    ) {
      this.blogPostDataKey = makeStateKey('blog-post-data');
    }

  ngOnInit() {
    // load saved content, this prevents the flickering on low speed networks
    if (this.transferState.hasKey(this.blogPostDataKey)) {
      this.title = this.transferState.get<Document>(this.blogPostDataKey).data.title[0].text;
      this.contentHtml = this.prismic.getHtml(this.transferState.get<Document>(this.blogPostDataKey).data.content);
    }
    this.asyncApiCallHelper.doTask(this.prismic.getTestPost()).pipe(take(1)).subscribe(data => {
      this.contentHtml = this.prismic.getHtml(data.data.content);
      this.title = data.data.title[0].text;
      this.transferState.set(this.blogPostDataKey, data);
    });


  }

}
