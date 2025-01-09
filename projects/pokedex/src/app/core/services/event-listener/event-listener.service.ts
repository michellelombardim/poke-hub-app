import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventListenerService implements OnDestroy {
  private eventResponseSubjects: Map<string, BehaviorSubject<any>> = new Map();
  private eventListeners: Map<string, EventListener> = new Map();

  constructor() {}

  listenToEvent(eventName: string): void {
    if (!this.eventListeners.has(eventName)) {
      const subject = new BehaviorSubject<any>(null);
      this.eventResponseSubjects.set(eventName, subject);

      const handler = this.handleEvent.bind(this, eventName);
      window.addEventListener(eventName, handler);
      this.eventListeners.set(eventName, handler);
    }
  }

  private handleEvent(eventName: string, event: Event): void {
    const customEvent = event as CustomEvent;
    const cloudEvent = customEvent.detail;
    console.log(`Received CloudEvent for ${eventName}:`, cloudEvent);

    const selectedType = cloudEvent.data;
    this.eventResponseSubjects.get(eventName)?.next(selectedType);
  }

  removeEvent(eventName: string): void {
    if (this.eventListeners.has(eventName)) {
      window.removeEventListener(
        eventName,
        this.eventListeners.get(eventName)!,
      );
      this.eventListeners.delete(eventName);
      this.eventResponseSubjects.get(eventName)?.complete();
      this.eventResponseSubjects.delete(eventName);
      console.log(`Stopped listening to ${eventName}`);
    }
  }

  getEventResponse$(eventName: string): BehaviorSubject<any> | null {
    return this.eventResponseSubjects.get(eventName) || null;
  }

  ngOnDestroy(): void {
    this.eventListeners.forEach((handler, eventName) => {
      window.removeEventListener(eventName, handler);
      this.eventResponseSubjects.get(eventName)?.complete();
    });

    this.eventListeners.clear();
    this.eventResponseSubjects.clear();
  }
}
