import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { EditArticleComponent } from './components/edit-article.component';
import { EditArticleService } from './services/edit-article.service';
import * as editArticleEffects from './store/effects.store';
import {
  editArticleFeatureKey,
  editArticleReducer,
} from './store/reducers.store';

export const routes: Route[] = [
  {
    path: '',
    component: EditArticleComponent,
    providers: [
      EditArticleService,
      provideState(editArticleFeatureKey, editArticleReducer),
      provideEffects(editArticleEffects),
    ],
  },
];
