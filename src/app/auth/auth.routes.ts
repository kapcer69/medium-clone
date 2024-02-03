import { Route } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const registerRoutes: Route[] = [
  {
    path: '',
    component: RegisterComponent,
  },
];

export const loginRoutes: Route[] = [
  {
    path: '',
    component: LoginComponent,
  },
];
