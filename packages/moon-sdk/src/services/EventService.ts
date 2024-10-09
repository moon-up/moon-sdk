// services/EventService.ts

import { EventEmitter } from 'events';

export class EventService {
  private emitter: EventEmitter;

  constructor() {
    this.emitter = new EventEmitter();
  }

  on(event: string, listener: (...args: any[]) => void): void {
    this.emitter.on(event, listener);
  }

  emit(event: string, ...args: any[]): void {
    this.emitter.emit(event, ...args);
  }

  off(event: string, listener: (...args: any[]) => void): void {
    this.emitter.off(event, listener);
  }

  once(event: string, listener: (...args: any[]) => void): void {
    this.emitter.once(event, listener);
  }

  removeAllListeners(event?: string): void {
    this.emitter.removeAllListeners(event);
  }
}
