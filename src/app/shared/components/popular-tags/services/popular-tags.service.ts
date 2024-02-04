import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { PopularTagType } from '../../../interfaces/popular-tag.type';
import { GetPopularTagsResponseInterface } from '../interfaces/getPopularTagsResponse.response';

@Injectable({
  providedIn: 'root',
})
export class PopularTagsService {
  constructor(private readonly http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    return this.http
      .get<GetPopularTagsResponseInterface>(`${environment.apiUrl}/tags`)
      .pipe(map((res) => res.tags));
  }
}
