import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EventListenerService } from '../event-listener/event-listener.service';
import { setSelectedPokemonType } from '../../store/actions/pokemon.actions';

@Injectable({
  providedIn: 'root',
})
export class PokemonTypeListenerService {
  constructor(
    private store: Store,
    private eventListenerService: EventListenerService
  ) {
    this.loadTypeFromLocalStorage();
  }

  private loadTypeFromLocalStorage(): void {
    const storedType = localStorage.getItem('selectedPokemonType');
    if (storedType) {
      this.store.dispatch(setSelectedPokemonType({ pokemonType: storedType }));
    }
  }

  listenPokemonTypeFromEvent(): void {
    this.eventListenerService.listenToEvent('pokemon.type.selected');
  }
}
