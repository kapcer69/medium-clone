import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ArticleInterface } from '../../shared/interfaces/article.interface';
import { EditArticleService } from '../services/edit-article.service';
import { editArticleActions } from './actions.store';
import { ArticleService as SharedArticleService } from '../../shared/services/article.service';

export const getArticleEffect = createEffect(
  (
    actions$ = inject(Actions),
    articleService = inject(SharedArticleService),
  ) => {
    return actions$.pipe(
      ofType(editArticleActions.getArticle),
      switchMap(({ slug }) => {
        return articleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return editArticleActions.getArticleSuccess({ article });
          }),
          catchError(() => {
            return of(editArticleActions.getArticleError());
          }),
        );
      }),
    );
  },
  { functional: true },
);

export const editArticleEffect = createEffect(
  (
    actions$ = inject(Actions),
    editArticleService = inject(EditArticleService),
  ) => {
    return actions$.pipe(
      ofType(editArticleActions.editArticle),
      switchMap(({ request, slug }) => {
        return editArticleService.editArticle(slug, request).pipe(
          map((article: ArticleInterface) => {
            return editArticleActions.editArticleSuccess({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              editArticleActions.editArticleError({
                errors: errorResponse.error.errors,
              }),
            );
          }),
        );
      }),
    );
  },
  { functional: true },
);

export const redirectAfterEditEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(editArticleActions.editArticleSuccess),
      tap(({ article }) => {
        router.navigate(['/articles', article.slug]);
      }),
    );
  },
  { functional: true, dispatch: false },
);
