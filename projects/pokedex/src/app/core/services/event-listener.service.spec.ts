import { TestBed } from '@angular/core/testing';
import { EventListenerService } from './event-listener.service';

describe('EventListenerService', () => {
  let service: EventListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should listen to pokemon.type.selected event and log selected type', () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    const mockEvent = new CustomEvent('pokemon.type.selected', {
      detail: {
        data: { name: 'Fire' }, 
      },
    });

    window.dispatchEvent(mockEvent);

    expect(consoleLogSpy).toHaveBeenCalledWith('Received CloudEvent:', mockEvent.detail);
    expect(consoleLogSpy).toHaveBeenCalledWith('Selected Pokémon Type: Fire');

    consoleLogSpy.mockRestore();
  });
});
