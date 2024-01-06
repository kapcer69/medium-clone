import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../../store/actions.store';
import { RegisterRequestInterface } from '../../interfaces/registerRequest.interface';
import { RouterLink } from '@angular/router';
import { AuthStateInterface } from '../../interfaces/authState.interface';
import { selectIsSubmitting } from '../../store/reducers.store';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
})
export class RegisterComponent {
  registerForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  isSubmitting$ = this.store.select(selectIsSubmitting);

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store
  ) {}

  onSubmit() {
    console.log(this.registerForm.getRawValue());
    const request: RegisterRequestInterface = {
      user: this.registerForm.getRawValue(),
    };
    this.store.dispatch(register({ request }));
  }
}
