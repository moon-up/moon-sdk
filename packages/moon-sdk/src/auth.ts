import { AUTH, MoonAuthConfig, MoonToken } from '@moonup/moon-types';

/**
 * The `moonAuthConfig` function takes a `MoonAuthConfig` object as its
 * parameter and returns a `MoonToken`. It is used to configure authentication
 * settings for the MoonUp library.
 *
 * The `MoonAuthConfig` object has the following properties: - `AuthType`: a
 * string that specifies the type of authentication. It can be one of the
 * following values: "OAUTH2", "JWT", or "X_API_KEY". - `CLIENT_ID`: (only for
 * OAuth2) a string that represents the client ID. - `CLIENT_SECRET`: (only for
 * OAuth2) a string that represents the client secret. - `REDIRECT_URI`: (only
 * for OAuth2) a string that represents the redirect URI.
 *
 * The returned `MoonToken` object has the following properties: - `type`: a
 * string that indicates the type of authentication token. It can be one of the
 * following values: "OAUTH2", "JWT", or "X_API_KEY". - `securityWorker`: an
 * async function that handles security-related tasks. It takes a `securityData`
 * object as its parameter and returns a Promise that resolves to an object
 * containing headers for authorization. - The `securityData` object has a
 * `token` property, which represents the authentication token. - The resolved
 * object contains headers with an Authorization field, which includes the
 * token.
 *
 * If no valid authentication type is provided in the `MoonAuthConfig` object,
 * the function defaults to using JWT authentication with the same security
 * worker implementation.
 *
 * Overall, this function allows you to configure authentication settings and
 * obtain a token object that can be used for subsequent API calls in the MoonUp
 * library.
 */
export const moonAuthConfig = (config: MoonAuthConfig): MoonToken => {
  switch (config.AuthType) {
    case AUTH.OAUTH2:
      return {
        type: AUTH.OAUTH2,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        securityWorker: async (securityData: any) => {
          return {
            headers: {
              Authorization: `Bearer ${securityData.token}`,
            },
          };
        },
        CLIENT_ID: config.CLIENT_ID,
        CLIENT_SECRET: config.CLIENT_SECRET,
        REDIRECT_URI: config.REDIRECT_URI,
      };
    case AUTH.JWT:
      return {
        type: AUTH.JWT,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        securityWorker: async (securityData: any) => {
          return Promise.resolve({
            headers: {
              Authorization: `Bearer ${securityData.token}`,
            },
          });
        },
      };
    case AUTH.X_API_KEY:
      return {
        type: AUTH.X_API_KEY,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        securityWorker: async (securityData: any) => {
          return {
            headers: {
              'x-api-key': `${securityData.token}`,
            },
          };
        },
      };
    default:
      return {
        type: AUTH.JWT,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        securityWorker: async (securityData: any) => {
          return {
            headers: {
              Authorization: `Bearer ${securityData.token}`,
            },
          };
        },
      };
  }
};
