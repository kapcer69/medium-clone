import { createActionGroup, props } from '@ngrx/store';
import { ArticleInterface } from '../../shared/interfaces/article.interface';
import { ArticleRequestInterface } from '../../shared/interfaces/articleRequest';
import { BackendErrorsInterface } from '../../shared/interfaces/backendErrors.interface';

export const createArticleActions = createActionGroup({
  source: 'create article',
  events: {
    'Create article': props<{ request: ArticleRequestInterface }>(),
    'Create article success': props<{ article: ArticleInterface }>(),
    'Create article error': props<{ errors: BackendErrorsInterface }>(),
  },
});
