import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserProfileInterface } from '../interfaces/userProfile.interface';
import { UserProfileService } from '../services/user-profile.service';
import { userProfileActions } from './actions.store';

export const getUserProfileEffect = createEffect(
  (
    actions$ = inject(Actions),
    userProfileService = inject(UserProfileService),
  ) => {
    return actions$.pipe(
      ofType(userProfileActions.getUserProfile),
      switchMap(({ username }) => {
        return userProfileService.getUserProfile(username).pipe(
          map((userProfile: UserProfileInterface) => {
            return userProfileActions.getUserProfileSuccess({ userProfile });
          }),
          catchError(() => {
            return of(userProfileActions.getUserProfileFailure());
          }),
        );
      }),
    );
  },
  { functional: true },
);
