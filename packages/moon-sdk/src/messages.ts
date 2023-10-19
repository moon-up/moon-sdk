import { EventEmitter } from 'events';
export interface MoonMessage {
	type: string;
	data: any;
}

export interface MoonMessageResponse {
	type: string;
	data: any;
}
export enum MoonMessageType {
	login = 'MOON_LOGIN',
	logout = 'MOON_LOGOUT',
}

// impelement moonmessagehandler interface with message handler
export class MoonMessageHandler {
	EventEmitter: EventEmitter;
	constructor() {
		// event emitter
		this.EventEmitter = new EventEmitter();
	}

	async handle(message: MoonMessage): Promise<MoonMessageResponse> {
		this.EventEmitter.emit(message.type, message.data);
		return {
			type: message.type,
			data: message.data,
		};
	}
}
