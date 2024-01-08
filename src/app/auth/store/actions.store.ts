import { createActionGroup, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../interfaces/registerRequest.interface';
import { CurrentUserInterface } from '../../shared/interfaces/currentUser.interface';
import { BackendErrorsInterface } from '../../shared/interfaces/backendErrors.interface';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register success': props<{ currentUser: CurrentUserInterface }>(),
    'Register failure': props<{ errors: BackendErrorsInterface }>(),
  },
});
