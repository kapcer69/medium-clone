import { routerNavigationAction } from '@ngrx/router-store';
import { createFeature, createReducer, on } from '@ngrx/store';
import { UserProfileStateInterface } from '../interfaces/userProfileState.interface';
import { userProfileActions } from './actions.store';

const initialState: UserProfileStateInterface = {
  isLoading: false,
  error: null,
  userProfile: null,
};

const userProfileFeature = createFeature({
  name: 'userProfile',
  reducer: createReducer(
    initialState,
    on(userProfileActions.getUserProfile, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(userProfileActions.getUserProfileSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      userProfile: action.userProfile,
    })),
    on(userProfileActions.getUserProfileFailure, (state) => ({
      ...state,
      isLoading: false,
    })),

    on(routerNavigationAction, () => initialState),
  ),
});

export const {
  name: userProfileFeatureKey,
  reducer: userProfileReducer,
  selectIsLoading,
  selectError,
  selectUserProfile,
} = userProfileFeature;
