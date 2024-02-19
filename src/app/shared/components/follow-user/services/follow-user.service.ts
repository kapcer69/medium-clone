import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { GetUserProfileResponseInterface } from '../../../../user-profile/interfaces/getUserProfileResponse.interface';
import { UserProfileInterface } from '../../../../user-profile/interfaces/userProfile.interface';

@Injectable()
export class FollowUserService {
  constructor(private readonly http: HttpClient) {}

  followUser(username: string): Observable<UserProfileInterface> {
    return this.http
      .post<GetUserProfileResponseInterface>(
        `${environment.apiUrl}/profiles/${username}/follow`,
        {},
      )
      .pipe(map((res) => res.profile));
  }

  unfollowUser(username: string): Observable<UserProfileInterface> {
    return this.http
      .delete<GetUserProfileResponseInterface>(
        `${environment.apiUrl}/profiles/${username}/follow`,
      )
      .pipe(map((res) => res.profile));
  }
}
