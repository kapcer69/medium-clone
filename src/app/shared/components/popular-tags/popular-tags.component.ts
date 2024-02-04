import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { LoadingComponent } from '../loading/loading.component';
import { popularTagsActions } from './store/actions.store';
import {
  selectError,
  selectIsLoading,
  selectPopularTags,
} from './store/reducers.store';

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popular-tags.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink, LoadingComponent, ErrorMessageComponent],
})
export class PopularTagsComponent implements OnInit {
  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    popularTags: this.store.select(selectPopularTags),
  });

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(popularTagsActions.getPopularTags());
  }
}
