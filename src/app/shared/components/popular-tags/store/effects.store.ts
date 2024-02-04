import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { PopularTagType } from '../../../interfaces/popular-tag.type';
import { PopularTagsService } from '../services/popular-tags.service';
import { popularTagsActions } from './actions.store';

export const getPopularTagsEffect = createEffect(
  (
    actions$ = inject(Actions),
    popularTagsService = inject(PopularTagsService),
  ) => {
    return actions$.pipe(
      ofType(popularTagsActions.getPopularTags),
      switchMap(() => {
        return popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return popularTagsActions.getPopularTagsSuccess({ popularTags });
          }),
          catchError(() => {
            return of(popularTagsActions.getPopularTagsFailure());
          }),
        );
      }),
    );
  },
  { functional: true },
);
