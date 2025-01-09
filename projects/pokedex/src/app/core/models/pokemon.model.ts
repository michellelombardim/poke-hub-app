export interface PokemonDataResponse  {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonData[];
}

export interface PokemonData {
  name: string;
  url: string;
}

export interface PokemonDataCard {
  name: string;
  id: number;
}
