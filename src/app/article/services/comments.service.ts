import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GetCommentsResponseInterface } from '../interfaces/getCommentsResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private readonly http: HttpClient) {}

  getComments(slug: string): Observable<GetCommentsResponseInterface> {
    return this.http.get<GetCommentsResponseInterface>(
      `${environment.apiUrl}/articles/${slug}/comments`,
    );
  }
}
