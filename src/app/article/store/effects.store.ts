import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ArticleInterface } from '../../shared/interfaces/article.interface';
import { ArticleService as SharedArticleService } from '../../shared/services/article.service';
import { GetCommentsResponseInterface } from '../interfaces/getCommentsResponse.interface';
import { ArticleService } from '../services/article.service';
import { CommentsService } from '../services/comments.service';
import { articleActions } from './actions.store';

export const getArticleEffect = createEffect(
  (
    actions$ = inject(Actions),
    articleService = inject(SharedArticleService),
  ) => {
    return actions$.pipe(
      ofType(articleActions.getArticle),
      switchMap(({ slug }) => {
        return articleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return articleActions.getArticleSuccess({ article });
          }),
          catchError(() => {
            return of(articleActions.getArticleError());
          }),
        );
      }),
    );
  },
  { functional: true },
);

export const deleteArticleEffect = createEffect(
  (actions$ = inject(Actions), articleService = inject(ArticleService)) => {
    return actions$.pipe(
      ofType(articleActions.deleteArticle),
      switchMap(({ slug }) => {
        return articleService.deleteArticle(slug).pipe(
          map(() => {
            return articleActions.deleteArticleSuccess();
          }),
          catchError(() => {
            return of(articleActions.deleteArticleError());
          }),
        );
      }),
    );
  },
  { functional: true },
);

export const redirectAfterDeleteEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(articleActions.deleteArticleSuccess),
      tap(() => {
        router.navigateByUrl('/');
      }),
    );
  },
  { functional: true, dispatch: false },
);

export const getCommentsEffect = createEffect(
  (actions$ = inject(Actions), commentsService = inject(CommentsService)) => {
    return actions$.pipe(
      ofType(articleActions.getComments),
      switchMap(({ slug }) => {
        return commentsService.getComments(slug).pipe(
          map((comments: GetCommentsResponseInterface) => {
            return articleActions.getCommentsSuccess({ comments });
          }),
          catchError(() => {
            return of(articleActions.getCommentsError());
          }),
        );
      }),
    );
  },
  { functional: true },
);
