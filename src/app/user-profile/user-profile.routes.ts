import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { UserProfileComponent } from './components/user-profile.component';
import { UserProfileService } from './services/user-profile.service';
import * as getUserProfileEffects from './store/effects.store';
import {
  userProfileFeatureKey,
  userProfileReducer,
} from './store/reducers.store';

export const routes: Route[] = [
  {
    path: '',
    component: UserProfileComponent,
    providers: [
      UserProfileService,
      provideState(userProfileFeatureKey, userProfileReducer),
      provideEffects(getUserProfileEffects),
    ],
  },
];
