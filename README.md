# 💥 Angular 7 Prerender with content from Prismic.io



This project is based on the [Angular Universal Starter](https://github.com/angular/universal-starter) project and demonstrates how to use Angular Universal for prerendering content from Prismic.io

Prerendering gives an Angular SPA the speed and SEO friendliness of a static website without the need of a server.

**Prismic** is a [Headless CMS](https://headlesscms.org/).

### ⭐ Comparison of SSR and Prerender 

| Goal              | SSR       | Prerendering |
|-------------------|-----------|--------------|
| performance       | fast      | fastest      |
| hosting cost      | ~$30/m    | $0           |
| complexity        | highest   | lowest       |
| static hosting    | No        | Yes          |
| scale limitations | Unlimited | Yes          |

(from [AngularFirebase](https://angularfirebase.com/lessons/angular-6-universal-ssr-prerendering-firebase-hosting/))


### Details

* Uses [ZoneMacroTaskWrapper](https://github.com/angular/angular/issues/20520#issuecomment-345856099) encapsulated on `async-api-call-helper.service.ts` to make Angular Universal wait for Prismic API calls before rendering.
* Uses TransferState service to prevent flickering in the server to browser transition.

---

### Build Time Prerendering

**Prerender** 
* Happens at build time
* Renders your application and replaces the dist index.html with a version rendered at the route `/`.


---

### Installation
* `npm install` or `yarn`

### Development (Client-side only rendering)
* run `npm run start` which will start `ng serve`

### Production (also for testing Pre-rendering locally)
**`npm run build:prerender && npm run serve:prerender`** - Compiles your application and prerenders your applications files, spinning up a demo http-server so you can view it on `http://localhost:8080`
**Note**: To deploy your static site to a static hosting platform you will have to deploy the `dist/browser` folder, rather than the usual `dist`



