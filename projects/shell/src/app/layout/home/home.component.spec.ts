import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { PokemonService } from '../../core/services/pokemon/pokemon.service';
import { SelectComponent } from '../../shared/components/select/select.component';

jest.mock('../../core/utils/cloud-event.util', () => ({
  createCloudEvent: jest.fn(),
  dispatchCloudEvent: jest.fn(),
}));

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let pokemonService: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterOutlet,
        HomeComponent, SelectComponent
      ],
      providers: [
        PokemonService, 
        provideHttpClient(withInterceptorsFromDi()),
        {
          provide: ActivatedRoute, // Mock do ActivatedRoute
          useValue: {
            snapshot: {
              paramMap: {
                get: jest.fn().mockReturnValue('1'), // Mock dos parâmetros da rota
              },
            },
            queryParams: of({ search: 'pikachu' }), // Mock dos parâmetros de consulta
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    pokemonService = TestBed.inject(PokemonService); // Obtém uma instância do serviço injetado
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
