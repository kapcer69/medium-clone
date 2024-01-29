import { RegisterRequestInterface } from './../interfaces/registerRequest.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CurrentUserInterface } from '../../shared/interfaces/currentUser.interface';
import { AuthResponseInterface } from '../interfaces/authResponse.interface';
import { environment } from '../../../environments/environment';
import { LoginRequestInterface } from '../interfaces/loginRequest.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    return this.http
      .get<AuthResponseInterface>(`${environment.apiUrl}/user`)
      .pipe(map(this.getUser));
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(`${environment.apiUrl}/users`, data)
      .pipe(map(this.getUser));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(`${environment.apiUrl}/users/login`, data)
      .pipe(map(this.getUser));
  }
}
