import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  isPrevUrl = input.required<boolean>();
  isNextUrl = input.required<boolean>();

  prevLabel = input<string>('Previous');
  nextLabel = input<string>('Next');

  prevPageChange = output<void>();
  nextPageChange = output<void>();

  prevPage() {
    this.prevPageChange.emit();
  }
  nextPage() {
    this.nextPageChange.emit();
  }
}
