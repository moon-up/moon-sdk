import { MoonSDK } from '@moonup/moon-sdk';
import { Session, User } from '@supabase/supabase-js';
import { makeRedirectUri } from 'expo-auth-session';
import * as QueryParams from 'expo-auth-session/build/QueryParams';
import { SplashScreen, useRouter, useSegments } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { supabase } from '../lib/supabase';

SplashScreen.preventAutoHideAsync();

type MoonContextProps = {
  user: User | null;
  session: Session | null;
  initialized?: boolean;
  moon: MoonSDK | null;
  signUp: (email: string, password: string) => Promise<void>;
  signInWithPassword: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  sendMagicLink: (email: string) => Promise<void>;
  signInWithDiscord: () => Promise<void>;
  signInWithGithub: () => Promise<void>;
  signInWithTwitter: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
};

type MoonProviderProps = {
  children: React.ReactNode;
};

export const MoonContext = createContext<MoonContextProps>({
  user: null,
  session: null,
  initialized: false,
  moon: null,
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
});
WebBrowser.maybeCompleteAuthSession(); // required for web only
const redirectTo = makeRedirectUri();

export const useMoon = () => useContext(MoonContext);

export const MoonContextProvider = ({ children }: MoonProviderProps) => {
  const router = useRouter();
  const segments = useSegments();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [initialized, setInitialized] = useState<boolean>(false);
  const moon = new MoonSDK({ authInstance: supabase });
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
      console.log('event', event);
      setSession(session);
      setUser(session ? session.user : null);
      setInitialized(true);
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!initialized) return;

    const inProtectedGroup = segments[0] === '(protected)';

    if (session && !inProtectedGroup) {
      router.replace('/(protected)/home');
    } else if (!session) {
      router.replace('/(public)/welcome');
    }

    /* HACK: Something must be rendered when determining the initial auth state... 
		instead of creating a loading screen, we use the SplashScreen and hide it after
		a small delay (500 ms)
		*/

    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 500);
  }, [initialized, session]);

  return (
    <MoonContext.Provider
      value={{
        user,
        session,
        initialized,
        moon,
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
