import { createCloudEvent, dispatchCloudEvent, CloudEvent } from './cloud-event.util';

describe('CloudEvent Utils', () => {
  describe('createCloudEvent', () => {
    it('should create a CloudEvent with the given data', () => {
      const type = 'test.event';
      const source = 'test.source';
      const data = { key: 'value' };

      const cloudEvent = createCloudEvent(type, source, data);

      expect(cloudEvent).toEqual(
        expect.objectContaining({
          specversion: '1.0',
          type: type,
          source: source,
          datacontenttype: 'application/json',
          data: data,
        })
      );

      expect(cloudEvent.id).toBeDefined(); 
      expect(cloudEvent.id).not.toBe(''); 
      expect(cloudEvent.time).toBeDefined(); 
      expect(new Date(cloudEvent.time).toString()).not.toBe('Invalid Date'); 
    });
  });

  describe('dispatchCloudEvent', () => {
    it('should dispatch a CustomEvent with the correct details', () => {
      const event: CloudEvent = {
        specversion: '1.0',
        type: 'test.event',
        source: 'test.source',
        id: '12345',
        time: new Date().toISOString(),
        datacontenttype: 'application/json',
        data: { key: 'value' },
      };

      const eventListenerMock = jest.fn();
      window.addEventListener(event.type, eventListenerMock);

      dispatchCloudEvent(event);

      expect(eventListenerMock).toHaveBeenCalledTimes(1);
      const calledEvent = eventListenerMock.mock.calls[0][0];
      expect(calledEvent.type).toBe(event.type);
      expect(calledEvent.detail).toEqual(event);

      window.removeEventListener(event.type, eventListenerMock);
    });
  });
});
