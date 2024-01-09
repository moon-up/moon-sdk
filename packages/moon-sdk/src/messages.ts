import { EventEmitter } from 'events';
export interface MoonMessage {
  type: string;
  data: string;
}

export interface MoonMessageResponse {
  type: string;
  data: string;
}
export enum MoonMessageType {
  login = 'MOON_LOGIN',
  logout = 'MOON_LOGOUT',
}

export class MoonMessageHandler {
  EventEmitter: EventEmitter;

  constructor() {
    this.EventEmitter = new EventEmitter();

    // // Add event listeners for MoonAccount related events
    // this.EventEmitter.on('updateToken', this.updateToken.bind(this));
    // this.EventEmitter.on(
    //   'updateRefreshToken',
    //   this.updateRefreshToken.bind(this)
    // );
  }

  emit(type: string, data: string) {
    this.EventEmitter.emit(type, data);
  }

  async handle(message: MoonMessage): Promise<MoonMessageResponse> {
    this.EventEmitter.emit(message.type, message.data);
    return {
      type: message.type,
      data: message.data,
    };
  }

  //   // Function to handle 'updateToken' event
  //   updateToken(newToken: string) {
  //     this.moonAccount.token = newToken;
  //   }

  //   // Function to handle 'updateRefreshToken' event
  //   updateRefreshToken(newRefreshToken: string) {
  //     this.moonAccount.refreshToken = newRefreshToken;
  //   }
}
