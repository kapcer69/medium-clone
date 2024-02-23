import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ErrorMessageComponent } from '../../../shared/components/error-message/error-message.component';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { CommentInterface } from '../../interfaces/comment.interface';

@Component({
  selector: 'mc-comments',
  templateUrl: './comments.component.html',
  standalone: true,
  imports: [CommonModule, LoadingComponent, ErrorMessageComponent, RouterLink],
})
export class CommentsComponent {
  @Input({ required: true }) comments: CommentInterface[] = [];
  @Input() isLoading: boolean = false;
  @Input() error: string | null = null;
}
