import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../interfaces/registerRequest.interface';

export const register = createAction(
  '[Auth] Register',
  props<{ request: RegisterRequestInterface }>()
);
