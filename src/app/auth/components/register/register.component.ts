import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../../store/actions.store';
import { RegisterRequestInterface } from '../../interfaces/registerRequest.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
})
export class RegisterComponent {
  registerForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private store: Store) {}

  onSubmit() {
    console.log(this.registerForm.getRawValue());
    const request: RegisterRequestInterface = {
      user: this.registerForm.getRawValue(),
    };
    this.store.dispatch(register({ request }));
  }
}
