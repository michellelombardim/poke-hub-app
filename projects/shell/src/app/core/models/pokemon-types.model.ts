export interface PokemonTypeResponse {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonType[];
}

export interface PokemonType {
  name: string;
  url: string;
}