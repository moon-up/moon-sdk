import { MoonSDK } from '@moonup/moon-sdk';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createClient } from '@supabase/supabase-js';
import React from 'react';

export const MoonContextProvider = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={session}
    >
      {children}
    </SessionContextProvider>
  );
};
