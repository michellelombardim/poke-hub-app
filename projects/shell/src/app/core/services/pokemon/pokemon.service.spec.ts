import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';
import { PokemonTypeResponse } from '../../models/pokemon-types.model';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService], 
    });

    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController); 
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); 
  });

  it('should fetch pokemon types from the API', () => {
    const mockResponse: PokemonTypeResponse = {
      results: [
        {
          name: 'Fire',
          url: ''
        },
        {
          name: 'Water',
          url: ''
        },
        {
          name: 'Grass',
          url: ''
        },
      ],
      count: 0,
      next: '',
      previous: null
    };

    service.getPokemonTypes().subscribe((response) => {
      expect(response).toEqual(mockResponse); 
    });

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/type');
    expect(req.request.method).toBe('GET'); 
    req.flush(mockResponse); 

    httpMock.verify();
  });
});
