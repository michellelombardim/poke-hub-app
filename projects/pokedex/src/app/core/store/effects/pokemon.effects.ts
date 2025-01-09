import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { setSelectedPokemonType } from '../actions/pokemon.actions';

@Injectable()
export class PokemonEffects {
  constructor(private actions$: Actions) {}

  saveSelectedTypeToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setSelectedPokemonType),
        tap((action) => {
          const selectedType = action.pokemonType; 
          console.log(`Saving selected type: ${selectedType}`);

          localStorage.setItem('selectedPokemonType', selectedType);
        }),
      ),
    { dispatch: false },
  );
}
