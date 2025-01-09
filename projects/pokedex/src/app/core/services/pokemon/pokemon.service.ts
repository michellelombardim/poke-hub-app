import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDataResponse } from '../../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemons(url: string): Observable<PokemonDataResponse> {
    return this.http.get<PokemonDataResponse>(
      url ? url : `${this.apiUrl}/pokemon`,
    );
  }
}
