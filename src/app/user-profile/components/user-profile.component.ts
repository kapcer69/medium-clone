import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Params,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { combineLatest, filter, map } from 'rxjs';
import { selectCurrentUser } from '../../auth/store/reducers.store';
import { FeedComponent } from '../../shared/components/feed/feed.component';
import { FollowUserComponent } from '../../shared/components/follow-user/components/follow-user-component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { CurrentUserInterface } from '../../shared/interfaces/currentUser.interface';
import { UserProfileInterface } from '../interfaces/userProfile.interface';
import { userProfileActions } from '../store/actions.store';
import {
  selectError,
  selectIsLoading,
  selectUserProfile,
} from '../store/reducers.store';

@Component({
  selector: 'mc-user-profile',
  templateUrl: './user-profile.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FeedComponent,
    LoadingComponent,
    FollowUserComponent,
  ],
})
export class UserProfileComponent implements OnInit {
  username?: string;
  isCurrentUserProfile$ = combineLatest({
    currentUser: this.store.pipe(
      select(selectCurrentUser),
      filter(
        (currentUser): currentUser is CurrentUserInterface | null =>
          currentUser !== undefined,
      ),
    ),
    userProfile: this.store.pipe(
      select(selectUserProfile),
      filter((userProfile): userProfile is UserProfileInterface =>
        Boolean(userProfile),
      ),
    ),
  }).pipe(
    map(({ currentUser, userProfile }) => {
      return currentUser?.username === userProfile.username;
    }),
  );
  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    userProfile: this.store.select(selectUserProfile),
    isCurrentUserProfile: this.isCurrentUserProfile$,
  });

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly store: Store,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.username = params['username'];
      this.fetchUserProfile();
    });
  }

  fetchUserProfile(): void {
    if (this.username) {
      this.store.dispatch(
        userProfileActions.getUserProfile({ username: this.username }),
      );
    }
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites');
    return isFavorites
      ? `/articles?favorited=${this.username}`
      : `/articles?author=${this.username}`;
  }
}
