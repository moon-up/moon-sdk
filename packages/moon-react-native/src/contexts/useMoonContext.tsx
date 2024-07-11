import 'react-native-get-random-values';

// Import the the ethers shims (**BEFORE** ethers)
import '@ethersproject/shims';

import { MoonProvider } from '@moonup/ethers';
import { MoonSDK } from '@moonup/moon-sdk';
import { Session, User } from '@supabase/supabase-js';
import { RequestArguments } from 'eip1193-provider';
import { makeRedirectUri } from 'expo-auth-session';
import * as QueryParams from 'expo-auth-session/build/QueryParams';
import * as WebBrowser from 'expo-web-browser';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { supabase } from '../lib/supabase';

type MoonContextProps = {
  user: User | null;
  session: Session | null;
  initialized?: boolean;
  moon: MoonSDK | null;
  ethers: MoonProvider | null;
  signUp: (email: string, password: string) => Promise<void>;
  signInWithPassword: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  sendMagicLink: (email: string) => Promise<void>;
  signInWithDiscord: () => Promise<void>;
  signInWithGithub: () => Promise<void>;
  signInWithTwitter: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  connect: (accessToken?: string, refreshToken?: string) => Promise<void>;
  disconnect: () => Promise<void>;
  getUserSession: () => Promise<any>;
  connectEthers: () => Promise<void>;
  disconnectEthers: () => Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request: (args: RequestArguments) => Promise<any>;
};

type MoonProviderProps = {
  children: React.ReactNode;
};

export const MoonContext = createContext<MoonContextProps>({
  user: null,
  session: null,
  initialized: false,
  moon: null,
  ethers: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  signUp: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  signInWithPassword: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  signOut: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  sendMagicLink: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  signInWithDiscord: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  signInWithGithub: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  signInWithTwitter: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  signInWithGoogle: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  connect: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getUserSession: async () => ({ data: { session: null }, error: null }),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  connectEthers: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnectEthers: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  request: async () => {},
});
WebBrowser.maybeCompleteAuthSession(); // required for web only
const redirectTo = makeRedirectUri();

export const useMoon = () => useContext(MoonContext);

export const MoonContextProvider = ({ children }: MoonProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [initialized, setInitialized] = useState<boolean>(false);
  const moon = new MoonSDK({ authInstance: supabase });
  const ethers = new MoonProvider({
    SDK: moon,
    chainId: 1,
  });
  const connect = async (accessToken?: string, refreshToken?: string) => {
    if (moon) {
      await moon.connect(accessToken, refreshToken);
    }
  };

  const disconnect = async () => {
    if (moon) {
      await moon.disconnect();
    }
  };

  const getUserSession = async () => {
    if (moon) {
      return await moon.getUserSession();
    }
    return { data: { session: null }, error: null };
  };

  const connectEthers = async () => {
    if (ethers) {
      await ethers.connect();
    }
  };

  const disconnectEthers = async () => {
    if (ethers) {
      await ethers.disconnect();
    }
  };

  const request = async (args: RequestArguments) => {
    if (ethers) {
      return await ethers.request(args);
    }
    return null;
  };
  const createSessionFromUrl = async (url: string) => {
    const { params, errorCode } = QueryParams.getQueryParams(url);

    if (errorCode) throw new Error(errorCode);
    const { access_token, refresh_token } = params;

    if (!access_token) return;

    const { data, error } = await supabase.auth.setSession({
      access_token,
      refresh_token,
    });
    if (error) throw error;
    return data.session;
  };

  const performDiscordOAuth = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo,
        skipBrowserRedirect: true,
      },
    });
    if (error) throw error;

    const res = await WebBrowser.openAuthSessionAsync(
      data?.url ?? '',
      redirectTo
    );

    if (res.type === 'success') {
      const { url } = res;
      await createSessionFromUrl(url);
    }
  };
  const performGithubOAuth = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo,
        skipBrowserRedirect: true,
      },
    });
    if (error) throw error;

    const res = await WebBrowser.openAuthSessionAsync(
      data?.url ?? '',
      redirectTo
    );

    if (res.type === 'success') {
      const { url } = res;
      await createSessionFromUrl(url);
    }
  };
  const performGoogleOAuth = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo,
        skipBrowserRedirect: true,
      },
    });
    if (error) throw error;

    const res = await WebBrowser.openAuthSessionAsync(
      data?.url ?? '',
      redirectTo
    );

    if (res.type === 'success') {
      const { url } = res;
      await createSessionFromUrl(url);
    }
  };

  const performTwitterOauth = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'twitter',
      options: {
        redirectTo,
        skipBrowserRedirect: true,
      },
    });
    if (error) throw error;

    const res = await WebBrowser.openAuthSessionAsync(
      data?.url ?? '',
      redirectTo
    );

    if (res.type === 'success') {
      const { url } = res;
      await createSessionFromUrl(url);
    }
  };

  const sendMagicLink = async (email: string) => {
    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: redirectTo,
      },
    });

    if (error) throw error;
  };
  // Email

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      throw error;
    }
  };

  const signInWithPassword = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw error;
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
  };

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session);
      setUser(session ? session.user : null);
      setInitialized(true);
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <MoonContext.Provider
      value={{
        user,
        session,
        initialized,
        moon,
        ethers,
        connect,
        disconnect,
        getUserSession,
        connectEthers,
        disconnectEthers,
        request,
        signUp,
        signInWithPassword,
        signOut,
        signInWithDiscord: performDiscordOAuth,
        signInWithGithub: performGithubOAuth,
        signInWithTwitter: performTwitterOauth,
        signInWithGoogle: performGoogleOAuth,
        sendMagicLink,
      }}
    >
      {children}
    </MoonContext.Provider>
  );
};
