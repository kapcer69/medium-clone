import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ArticleInterface } from '../../shared/interfaces/article.interface';
import { ArticleRequestInterface } from '../../shared/interfaces/articleRequest';
import { BackendErrorsInterface } from '../../shared/interfaces/backendErrors.interface';

export const editArticleActions = createActionGroup({
  source: 'edit article',
  events: {
    'Get article': props<{ slug: string }>(),
    'Get article success': props<{ article: ArticleInterface }>(),
    'Get article error': emptyProps(),

    'Edit article': props<{ request: ArticleRequestInterface; slug: string }>(),
    'Edit article success': props<{ article: ArticleInterface }>(),
    'Edit article error': props<{ errors: BackendErrorsInterface }>(),
  },
});
