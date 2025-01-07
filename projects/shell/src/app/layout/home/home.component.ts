import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { PokemonService } from '../../core/services/pokemon/pokemon.service';
import { SelectComponent } from '../../shared/components/select/select.component';
import {
  PokemonType,
  PokemonTypeResponse,
} from '../../core/models/pokemon-types.model';
import { SelectOptions } from '../../core/models/select.model';
import {
  createCloudEvent,
  dispatchCloudEvent,
} from '../../core/utils/cloud-event.util';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    SelectComponent,
    ReactiveFormsModule,
    RouterOutlet,
    RouterModule,
  ],
  providers: [PokemonService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  pokemonTypeForm: FormGroup;
  pokemonTypes: SelectOptions[] = [];

  constructor(
    private fb: FormBuilder,
    private pokemonService: PokemonService,
  ) {
    this.pokemonTypeForm = this.fb.group({
      pokemonType: [''],
    });
  }

  get pokemonTypeControl(): FormControl {
    return this.pokemonTypeForm.get('pokemonType') as FormControl;
  }

  ngOnInit(): void {
    this.loadPokemonTypes();

    this.pokemonTypeForm.get('pokemonType')?.valueChanges.subscribe(() => {
      this.pokemonTypeForm.updateValueAndValidity();
      this.sendValueToMicros(this.pokemonTypeForm.value.pokemonType);
    });
  }

  private loadPokemonTypes(): void {
    this.pokemonService.getPokemonTypes().subscribe({
      next: (response: PokemonTypeResponse) => {
        this.pokemonTypes = response.results.map((type: PokemonType) => {
          return {
            name: type.name,
            id: parseInt(type.url.split('/').reverse()[1], 10),
          };
        });
      },
      error: (error) => {
        console.error('Error al cargar los tipos de Pokémon', error);
      },
    });
  }

  private sendValueToMicros(type: SelectOptions) {
    const event = createCloudEvent<SelectOptions>(
      'pokemon.type.selected',
      'dropdown.component',
      type,
    );

    dispatchCloudEvent(event);
  }
}
