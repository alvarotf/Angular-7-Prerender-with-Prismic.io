import { Component, OnInit } from '@angular/core';
import { PrismicService } from '../services/prismic.service';
import { AsyncApiCallHelperService } from '../services/async-api-call-helper.service';
// tslint:disable-next-line:import-blacklist
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-test-blog-post',
  templateUrl: './test-blog-post.component.html',
  styleUrls: ['./test-blog-post.component.scss']
})
export class TestBlogPostComponent implements OnInit {

  contentHtml: string;

  constructor(private prismic: PrismicService, private asyncApiCallHelper: AsyncApiCallHelperService) { }

  ngOnInit() {
    this.asyncApiCallHelper.doTask(this.prismic.getTestPost()).pipe(take(1)).subscribe(data => {
      this.contentHtml = this.prismic.getHtml(data.data.content);
    });

  }

}
