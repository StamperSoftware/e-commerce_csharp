import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss'
})
export class EmptyStateComponent {
  @Input() message = '';
  @Input() redirectUrl = '';
  @Input() secondMessage = '';
}
