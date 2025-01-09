import { TestBed } from '@angular/core/testing';
import { EventListenerGuard } from './event-listener.guard';

describe('EventListenerGuard', () => {
  let guardEventListenerGuard: EventListenerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guardEventListenerGuard = TestBed.inject(EventListenerGuard);
  });

  it('should be created', () => {
    expect(guardEventListenerGuard).toBeTruthy();
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
