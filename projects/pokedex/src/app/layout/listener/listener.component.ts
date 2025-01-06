import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listener',
  imports: [CommonModule],
  templateUrl: './listener.component.html',
  standalone: true,
  styleUrl: './listener.component.scss',
})
export class ListenerComponent {
  constructor() {
    window.addEventListener('pokemon.type.selected', (event: Event) => {
      const customEvent = event as CustomEvent;
      console.log('Dropdown event received:', customEvent.detail.data);
    });
  }
}
