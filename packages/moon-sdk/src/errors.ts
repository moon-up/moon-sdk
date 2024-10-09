export class MoonSDKError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MoonSDKError';
  }
}

export class ConfigurationError extends MoonSDKError {}
export class AuthenticationError extends MoonSDKError {}
export class NetworkError extends MoonSDKError {}
