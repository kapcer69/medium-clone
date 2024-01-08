import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../interfaces/backendErrors.interface';

@Component({
  selector: 'mc-backend-error-messages',
  standalone: true,
  imports: [],
  templateUrl: './backend-error-messages.component.html',
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input() backendErrors: BackendErrorsInterface = {};
  errorMessages: string[] = [];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const message = this.backendErrors[name].join(' ');
      return `${name} ${message}`;
    });
  }
}
