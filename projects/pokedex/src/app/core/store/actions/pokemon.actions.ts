import { createAction, props } from '@ngrx/store';

export const setSelectedPokemonType = createAction(
  '[Pokemon] Set Selected Type',
  props<{ pokemonType: string }>(),
);
