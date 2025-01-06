export interface CloudEvent<T = any> {
  specversion: string;
  type: string;
  source: string;
  id: string;
  time: string;
  datacontenttype: string;
  data: T;
}

export function createCloudEvent<T>(
  type: string,
  source: string,
  data: T,
): CloudEvent<T> {
  return {
    specversion: '1.0',
    type: type,
    source: source,
    id: Math.random().toString(36).substring(2), // Random unique ID
    time: new Date().toISOString(),
    datacontenttype: 'application/json',
    data: data,
  };
}

export function dispatchCloudEvent<T>(event: CloudEvent<T>): void {
  window.dispatchEvent(new CustomEvent(event.type, { detail: event }));
}
