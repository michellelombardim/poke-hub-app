import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventListenerService {
  constructor() {
    this.listenToDropdownEvents();
  }

  private listenToDropdownEvents(): void {
    window.addEventListener('pokemon.type.selected', (event: Event) => {
      const customEvent = event as CustomEvent;
      const cloudEvent = customEvent.detail;
      console.log('Received CloudEvent:', cloudEvent);

      const selectedType = cloudEvent.data;
      console.log(`Selected Pokémon Type: ${selectedType.name}`);
    });
  }
}
