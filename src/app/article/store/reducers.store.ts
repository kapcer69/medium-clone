import { routerNavigationAction } from '@ngrx/router-store';
import { createFeature, createReducer, on } from '@ngrx/store';
import { ArticleStateInterface } from '../interfaces/articleState.interface';
import { articleActions } from './actions.store';

const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  article: null,
};

const articleFeature = createFeature({
  name: 'article',
  reducer: createReducer(
    initialState,
    on(articleActions.getArticle, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(articleActions.getArticleSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      article: action.article,
    })),
    on(articleActions.getArticleError, (state) => ({
      ...state,
      isLoading: false,
    })),

    on(routerNavigationAction, () => initialState),
  ),
});

export const {
  name: articleFeatureKey,
  reducer: articleReducer,
  selectIsLoading,
  selectError,
  selectArticle,
} = articleFeature;
