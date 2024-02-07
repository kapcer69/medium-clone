import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/auth.routes').then((m) => m.registerRoutes),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.loginRoutes),
  },
  {
    path: '',
    loadChildren: () =>
      import('./global-feed/global-feed.routes').then((m) => m.routes),
  },
  {
    path: 'feed',
    loadChildren: () =>
      import('./your-feed/your-feed.routes').then((m) => m.routes),
  },
  {
    path: 'tags/:slug',
    loadChildren: () =>
      import('./tag-feed/tag-feed.routes').then((m) => m.routes),
  },
  {
    path: 'articles/new',
    loadChildren: () =>
      import('./create-article/create-article.routes').then((m) => m.routes),
  },
  {
    path: 'articles/:slug/edit',
    loadChildren: () =>
      import('./edit-article/edit-article.routes').then((m) => m.routes),
  },
];
