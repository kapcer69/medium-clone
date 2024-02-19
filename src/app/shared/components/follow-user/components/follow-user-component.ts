import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { followUserActions } from '../store/actions.store';

@Component({
  selector: 'mc-follow-user',
  templateUrl: './follow-user.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class FollowUserComponent {
  @Input() username = '';
  @Input() isFollowing = false;

  constructor(private readonly store: Store) {}

  handleFollow() {
    this.store.dispatch(
      followUserActions.followUser({
        username: this.username,
        isFollowing: this.isFollowing,
      }),
    );
    this.isFollowing = !this.isFollowing;
  }
}
