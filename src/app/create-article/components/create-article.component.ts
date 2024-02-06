import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { ArticleFormComponent } from '../../shared/components/article-form/article-form.component';
import { ArticleFormValuesInterface } from '../../shared/components/article-form/interfaces/articleFormValues.interface';
import { ArticleRequestInterface } from '../../shared/interfaces/articleRequest';
import { createArticleActions } from '../store/actions.store';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../store/reducers.store';

@Component({
  selector: 'mc-create-article',
  templateUrl: './create-article.component.html',
  standalone: true,
  imports: [CommonModule, ArticleFormComponent],
})
export class CreateArticleComponent {
  initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };
  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  });

  constructor(private readonly store: Store) {}

  onSubmit(articleFormValues: ArticleFormValuesInterface): void {
    const request: ArticleRequestInterface = {
      article: articleFormValues,
    };
    this.store.dispatch(
      createArticleActions.createArticle({ request: request }),
    );
  }
}
