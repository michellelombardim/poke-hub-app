import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonTypeResponse } from '../../models/pokemon-types.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonTypes(): Observable<PokemonTypeResponse> {
    return this.http.get<PokemonTypeResponse>(`${this.apiUrl}/type`);
  }
}
