import { routerNavigationAction } from '@ngrx/router-store';
import { createFeature, createReducer, on } from '@ngrx/store';
import { EditArticleStateInterface } from '../interfaces/editArticleState.interface';
import { editArticleActions } from './actions.store';

const initialState: EditArticleStateInterface = {
  isSubmitting: false,
  isLoading: false,
  validationErrors: null,
  article: null,
};

const editArticleFeature = createFeature({
  name: 'editArticle',
  reducer: createReducer(
    initialState,
    on(editArticleActions.getArticle, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(editArticleActions.getArticleSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      article: action.article,
    })),
    on(editArticleActions.getArticleError, (state) => ({
      ...state,
      isLoading: false,
    })),

    on(editArticleActions.editArticle, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(editArticleActions.editArticleSuccess, (state) => ({
      ...state,
      isSubmitting: false,
    })),
    on(editArticleActions.editArticleError, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),

    on(routerNavigationAction, () => initialState),
  ),
});

export const {
  name: editArticleFeatureKey,
  reducer: editArticleReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectValidationErrors,
  selectArticle,
} = editArticleFeature;
