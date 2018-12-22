import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Universal Demo using Angular and Angular CLI</h1>
  <a routerLink="/">Home</a>
  <a routerLink="/lazy">Lazy</a>
  <a routerLink="/lazy/nested">Lazy_Nested</a>
  <a routerLink="/no-prerender">No Prerender</a>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

}
