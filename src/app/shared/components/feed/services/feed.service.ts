import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { GetFeedResponseInterface } from '../interfaces/getFeedResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private readonly http: HttpClient) {}

  getFeed(url: string): Observable<GetFeedResponseInterface> {
    return this.http.get<GetFeedResponseInterface>(
      `${environment.apiUrl}/${url}`
    );
  }
}
