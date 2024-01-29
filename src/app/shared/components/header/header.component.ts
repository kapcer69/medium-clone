import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../../auth/store/reducers.store';
import { combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mc-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class HeaderComponent {
  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser),
  });

  constructor(private readonly store: Store) {}
}
