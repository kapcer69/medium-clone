import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GetUserProfileResponseInterface } from '../interfaces/getUserProfileResponse.interface';
import { UserProfileInterface } from '../interfaces/userProfile.interface';

@Injectable()
export class UserProfileService {
  constructor(private readonly http: HttpClient) {}

  getUserProfile(username: string): Observable<UserProfileInterface> {
    return this.http
      .get<GetUserProfileResponseInterface>(
        `${environment.apiUrl}/profiles/${username}`,
      )
      .pipe(map((res) => res.profile));
  }
}
