import { Component, input, output } from '@angular/core';
import { CapitalizePipe } from '../../../core/pipes/capitalize.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  cardClass = input<string>('bg-base-100 w-full shadow-xl hover:shadow-2xl');
  titleTxt = input.required<string>();
  descriptionTxt = input<string>('');
  imageUrl = input<string>('');
  imageName = input<string>('Image');
  buttonTxt = input<string>('');
  buttonClick = output<void>();

  buttonClickAction() {
    this.buttonClick.emit();
  }
}
