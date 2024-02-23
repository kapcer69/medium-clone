import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ArticleInterface } from '../../shared/interfaces/article.interface';
import { GetCommentsResponseInterface } from '../interfaces/getCommentsResponse.interface';

export const articleActions = createActionGroup({
  source: 'article',
  events: {
    'Get article': props<{ slug: string }>(),
    'Get article success': props<{ article: ArticleInterface }>(),
    'Get article error': emptyProps(),

    'Delete article': props<{ slug: string }>(),
    'Delete article success': emptyProps(),
    'Delete article error': emptyProps(),

    'Get comments': props<{ slug: string }>(),
    'Get comments success': props<{ comments: GetCommentsResponseInterface }>(),
    'Get comments error': emptyProps(),
  },
});
