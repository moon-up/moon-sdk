/**
 * Represents an error specific to the Moon SDK.
 *
 * @remarks
 * This error is used to indicate issues that are specific to the Moon SDK.
 *
 * @example
 * ```typescript
 * throw new MoonSDKError('An error occurred in the Moon SDK');
 * ```
 *
 * @param message - A descriptive message explaining the error.
 */
export class MoonSDKError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MoonSDKError';
  }
}

/**
 * Represents an error that occurs due to a configuration issue in the Moon SDK.
 * This error is a specific type of `MoonSDKError`.
 */
export class ConfigurationError extends MoonSDKError {}
/**
 * Represents an error that occurs during authentication processes.
 * This error is a specific type of `MoonSDKError`.
 */
export class AuthenticationError extends MoonSDKError {}
/**
 * Represents an error that occurs during network operations.
 * This class extends the `MoonSDKError` to provide additional context
 * specific to network-related issues.
 */
export class NetworkError extends MoonSDKError {}

/**
 * Represents an error that occurs within a specific blockchain chain.
 * Extends the standard `Error` object to include additional context about the chain and method where the error occurred.
 *
 * @extends {Error}
 */
export class ChainError extends Error {
  constructor(
    message: string,
    public chainName: string,
    public method: string
  ) {
    super(message);
    this.name = 'ChainError';
  }
}
