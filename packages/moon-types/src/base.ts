import { AUTH } from './auth';
import { MOON_SUPPORTED_NETWORKS } from './chain';
import { MoonSDKConfig } from './config';
import { MOON_SESSION_KEY, MoonStorage, Storage } from './storage';

export const baseConfig: MoonSDKConfig = {
  Auth: {
    type: AUTH.JWT,
  },
  Storage: new MoonStorage(Storage.LOCAL, MOON_SESSION_KEY),
  Networks: MOON_SUPPORTED_NETWORKS,
};
