import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BackendErrorsInterface } from '../../interfaces/backendErrors.interface';
import { BackendErrorMessagesComponent } from '../backend-error-messages/backend-error-messages.component';
import { ArticleFormValuesInterface } from './interfaces/articleFormValues.interface';

@Component({
  selector: 'mc-article-form',
  templateUrl: './article-form.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BackendErrorMessagesComponent],
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValues?: ArticleFormValuesInterface;
  @Input() isSubmitting = false;
  @Input() errors: BackendErrorsInterface | null = null;
  @Output() articleSubmit = new EventEmitter<ArticleFormValuesInterface>();

  form = this.fb.nonNullable.group({
    title: '',
    description: '',
    body: '',
    tagList: '',
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    if (this.initialValues) {
      this.form.patchValue({
        title: this.initialValues.title,
        description: this.initialValues.description,
        body: this.initialValues.body,
        tagList: this.initialValues.tagList.join(' '),
      });
    } else {
      throw new Error('Inputs are not provided');
    }
  }

  onSubmit(): void {
    const formValue = this.form.getRawValue();
    const articleFormValues: ArticleFormValuesInterface = {
      ...formValue,
      tagList: formValue.tagList.split(' '),
    };
    this.articleSubmit.emit(articleFormValues);
  }
}
