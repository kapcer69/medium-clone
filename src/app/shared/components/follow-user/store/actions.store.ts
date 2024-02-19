import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { UserProfileInterface } from '../../../../user-profile/interfaces/userProfile.interface';

export const followUserActions = createActionGroup({
  source: 'Follow user',
  events: {
    'Follow user': props<{ username: string; isFollowing: boolean }>(),
    'Follow user success': props<{ userProfile: UserProfileInterface }>(),
    'Follow user failure': emptyProps(),
  },
});
