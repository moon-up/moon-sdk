import { AUTH, MoonAuthConfig, MoonToken } from '@moonup/moon-types';

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
