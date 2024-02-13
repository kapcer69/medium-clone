import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { UserProfileInterface } from '../interfaces/userProfile.interface';

export const userProfileActions = createActionGroup({
  source: 'User Profile',
  events: {
    'Get user profile': props<{ username: string }>(),
    'Get user profile success': props<{ userProfile: UserProfileInterface }>(),
    'Get user profile failure': emptyProps(),
  },
});
