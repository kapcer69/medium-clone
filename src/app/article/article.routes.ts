import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from './services/article.service';
import { CommentsService } from './services/comments.service';
import * as articleEffects from './store/effects.store';
import { articleFeatureKey, articleReducer } from './store/reducers.store';

export const routes: Route[] = [
  {
    path: '',
    component: ArticleComponent,
    providers: [
      provideEffects(articleEffects),
      provideState(articleFeatureKey, articleReducer),
      ArticleService,
      CommentsService,
    ],
  },
];
