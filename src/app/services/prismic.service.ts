import { Injectable } from '@angular/core';
import { getApi } from 'prismic-javascript';
import * as prismicDom from 'prismic-dom';

@Injectable({
  providedIn: 'root'
})
export class PrismicService {

  constructor() { }

  async getTestPost() {
    const apiEndpoint = 'https://alvarogarzo.cdn.prismic.io/api/v2';
    const api = await getApi(apiEndpoint);
    const data = await api.getByUID('blog_post_2', 'test-blog-post');
    // console.log(data);
    return data;
    // console.log(data);
    // post = prismicDom.RichText.asHtml(data.results[0].data.content);
    // return post;
  }

  getHtml(richText: any) {
    return prismicDom.RichText.asHtml(richText);
  }
}
