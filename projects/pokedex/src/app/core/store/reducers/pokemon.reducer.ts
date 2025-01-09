import { createReducer, on } from '@ngrx/store';
import { setSelectedPokemonType } from '../actions/pokemon.actions';

export interface PokemonState {
  selectedType: string | null;
}

export const initialState: PokemonState = {
  selectedType: null,
};

export const pokemonReducer = createReducer(
  initialState,
  on(setSelectedPokemonType, (state, { pokemonType }) => ({
    ...state,
    selectedType: pokemonType,
  })),
);
