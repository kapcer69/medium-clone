import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { BackendErrorMessagesComponent } from '../../../shared/components/backend-error-messages/backend-error-messages.component';
import { LoginRequestInterface } from '../../interfaces/loginRequest.interface';
import { authActions } from '../../store/actions.store';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducers.store';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BackendErrorMessagesComponent,
    RouterLink,
  ],
})
export class LoginComponent {
  loginForm = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store
  ) {}

  onSubmit() {
    console.log(this.loginForm.getRawValue());
    const request: LoginRequestInterface = {
      user: this.loginForm.getRawValue(),
    };
    this.store.dispatch(authActions.login({ request }));
  }
}
