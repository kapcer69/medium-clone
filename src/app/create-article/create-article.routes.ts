import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { CreateArticleComponent } from './components/create-article.component';
import { CreateArticleService } from './services/create-article.service';
import * as createArticleEffects from './store/effects.store';
import {
  createArticleFeatureKey,
  createArticleReducer,
} from './store/reducers.store';

export const routes: Route[] = [
  {
    path: '',
    component: CreateArticleComponent,
    providers: [
      CreateArticleService,
      provideState(createArticleFeatureKey, createArticleReducer),
      provideEffects(createArticleEffects),
    ],
  },
];
