import {
  IconDiscord,
  IconGithub,
  IconGoogle,
  IconTwitter,
} from '@/assets/icons';
import { useMoonSDK } from '@/index';
import React, { useEffect } from 'react';
import { SocialLogins as SocialLoginsType } from '../../types/types';

interface SocialLoginsProps {
  socialLogins: SocialLoginsType;
}

function SocialLogins({ socialLogins }: SocialLoginsProps) {
  const { supabase, moon } = useMoonSDK();
  useEffect(() => {
    //listen for changes in the current URL and if code is present, extract it and send it to the server
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');
    if (code) {
      const authType = localStorage.getItem('moon_auth_type');
      console.log('code', code, authType);
      if (authType === 'google') {
        moon
          ?.performGoogleOauthCodeExchange(code)
          .then((data) =>
            setToken(data.token.access_token, data.token.refresh_token)
          );
      } else if (authType === 'discord') {
        moon
          ?.performDiscordOauthCodeExchange(code)
          .then((data) =>
            setToken(data.token.access_token, data.token.refresh_token)
          );
      }
      url.searchParams.delete('code');
      window.history.replaceState({}, '', url.toString());
    }
  }, []);

  const setToken = async (access_token: string, refresh_token: string) => {
    if (!supabase) return console.error('Supabase not initialized');
    await supabase.auth.setSession({
      access_token,
      refresh_token,
    });
  };

  const signInDiscord = async () => {
    if (!moon) return console.error('Moon not initialized');
    localStorage.setItem('moon_auth_type', 'discord');
    await moon?.performDiscordOAuth();
  };

  const signInGoogle = async () => {
    if (!moon) return console.error('Moon not initialized');
    localStorage.setItem('moon_auth_type', 'google');
    await moon?.performGoogleOAuth();
  };

  if (!socialLogins) return null;
  return (
    <>
      {socialLogins.includes('discord') && (
        <div
          className="p-2 bg-accent-color w-min h-min rounded-xl border-2 border-transparent hover:border-white cursor-pointer"
          onClick={signInDiscord}
        >
          <IconDiscord className="w-[30px] h-[30px]" />
        </div>
      )}

      {socialLogins.includes('github') && (
        <div
          className="p-2 bg-gray-900 w-min h-min rounded-xl border-2 border-transparent hover:border-white cursor-pointer"
          onClick={signInGoogle}
        >
          <IconGithub className="w-[30px] h-[30px]" />
        </div>
      )}
      {socialLogins.includes('twitter') && (
        <div
          className="p-2 bg-sky-500 w-min h-min rounded-xl border-2 border-transparent hover:border-white cursor-pointer"
          onClick={signInGoogle}
        >
          <IconTwitter className="w-[30px] h-[30px]" />
        </div>
      )}
      {socialLogins.includes('google') && (
        <div
          className="p-2 bg-zinc-50 w-min h-min rounded-xl border-2 border-transparent hover:border-accent-color cursor-pointer"
          onClick={signInGoogle}
        >
          <IconGoogle className="w-[30px] h-[30px] text-[#000000]" />
        </div>
      )}
    </>
  );
}

export default SocialLogins;
