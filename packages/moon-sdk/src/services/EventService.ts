// services/EventService.ts

import { EventEmitter } from "events";

/**
 * Service for managing and emitting events.
 *
 * @class EventService
 * @private {EventEmitter} emitter - The event emitter instance.
 *
 * @method constructor
 * Initializes a new instance of the EventService class.
 *
 * @method on
 * Registers a listener for the specified event.
 *
 * @param {string} event - The name of the event.
 * @param {(...args: any[]) => void} listener - The callback function to execute when the event is emitted.
 *
 * @method emit
 * Emits the specified event with the provided arguments.
 *
 * @param {string} event - The name of the event.
 * @param {...any[]} args - The arguments to pass to the event listeners.
 *
 * @method off
 * Removes the specified listener for the given event.
 *
 * @param {string} event - The name of the event.
 * @param {(...args: any[]) => void} listener - The callback function to remove.
 *
 * @method once
 * Registers a one-time listener for the specified event.
 *
 * @param {string} event - The name of the event.
 * @param {(...args: any[]) => void} listener - The callback function to execute when the event is emitted.
 *
 * @method removeAllListeners
 * Removes all listeners for the specified event. If no event is specified, all listeners for all events are removed.
 *
 * @param {string} [event] - The name of the event. Optional.
 */
export class EventService {
	private emitter: EventEmitter;

	/**
	 * Constructs a new instance of the EventService class.
	 * Initializes the event emitter for handling events.
	 */
	constructor() {
		this.emitter = new EventEmitter();
	}

	/**
	 * Registers an event listener for the specified event.
	 *
	 * @param event - The name of the event to listen for.
	 * @param listener - The callback function to be invoked when the event is emitted.
	 */
	on(event: string, listener: (...args: any[]) => void): void {
		this.emitter.on(event, listener);
	}

	/**
	 * Emits an event with the specified name and arguments.
	 *
	 * @param event - The name of the event to emit.
	 * @param args - Additional arguments to pass with the event.
	 */
	emit(event: string, ...args: any[]): void {
		this.emitter.emit(event, ...args);
	}

	/**
	 * Unregisters a previously registered event listener.
	 *
	 * @param event - The name of the event to stop listening for.
	 * @param listener - The callback function that was originally registered.
	 */
	off(event: string, listener: (...args: any[]) => void): void {
		this.emitter.off(event, listener);
	}

	/**
	 * Registers a one-time listener for the specified event.
	 * The listener is invoked only the next time the event is fired,
	 * after which it is removed.
	 *
	 * @param event - The name of the event to listen for.
	 * @param listener - The callback function to execute when the event is fired.
	 */
	once(event: string, listener: (...args: any[]) => void): void {
		this.emitter.once(event, listener);
	}

	/**
	 * Removes all listeners for the specified event. If no event is provided,
	 * it removes all listeners for all events.
	 *
	 * @param event - The name of the event to remove listeners for. If omitted,
	 *                all listeners for all events will be removed.
	 */
	removeAllListeners(event?: string): void {
		this.emitter.removeAllListeners(event);
	}
}
