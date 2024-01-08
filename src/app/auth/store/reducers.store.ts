import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../interfaces/authState.interface';
import { authActions } from './actions.store';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.register, (state) => ({ ...state, isSubmitting: true }))
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
} = authFeature;
