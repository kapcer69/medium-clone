import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserProfileInterface } from '../../../../user-profile/interfaces/userProfile.interface';
import { FollowUserService } from '../services/follow-user.service';
import { followUserActions } from './actions.store';

export const followUserEffect = createEffect(
  (
    actions$ = inject(Actions),
    followUserService = inject(FollowUserService),
  ) => {
    return actions$.pipe(
      ofType(followUserActions.followUser),
      switchMap(({ username, isFollowing }) => {
        const userProfile$ = isFollowing
          ? followUserService.unfollowUser(username)
          : followUserService.followUser(username);
        return userProfile$.pipe(
          map((userProfile: UserProfileInterface) => {
            return followUserActions.followUserSuccess({ userProfile });
          }),
          catchError(() => {
            return of(followUserActions.followUserFailure());
          }),
        );
      }),
    );
  },
  { functional: true },
);
