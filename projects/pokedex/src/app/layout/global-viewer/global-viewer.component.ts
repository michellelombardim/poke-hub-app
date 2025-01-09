import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../core/services/pokemon/pokemon.service';
import {
  PokemonData,
  PokemonDataResponse,
} from '../../core/models/pokemon.model';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-global-viewer',
  standalone: true,
  imports: [CommonModule, PaginationComponent, CardComponent],
  templateUrl: './global-viewer.component.html',
  styleUrls: ['./global-viewer.component.scss'],
})
export class GlobalViewerComponent implements OnInit {
  pokemons: PokemonData[] = [];
  nextUrl: string = '';
  prevUrl: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(url: string = '') {
    this.pokemonService.getPokemons(url).subscribe({
      next: (response: PokemonDataResponse) => {
        console.log(response);
        this.pokemons = response.results;
        this.nextUrl = response.next;
        this.prevUrl = response.previous ? response.previous : '';
      },
      error: (error) => {
        console.error('Error al cargar los tipos de Pokémon', error);
      },
    });
  }

  goToDetail(url: string) {
    console.log(url);
  }
}
