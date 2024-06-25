import { useState } from "react";
import { useMoonSDK } from "@hooks/index";
import { AuthModalConfig } from "../../types/types";
import Button from "../Button/Button";
import React from "react";
import Input from "../Input/Input";

interface EmailLoginProps {
  config: AuthModalConfig;
}
const EmailLogin = ({ config }: EmailLoginProps) => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { supabase, authConfig } = useMoonSDK();

  const handleLoginEmail = async () => {
    try {
      if (!supabase) return;

      setIsLoggingIn(true);
      const response = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      console.log("login response", response);
      if (response.error) {
        console.error(response.error);
        setError(response.error.message);
        setIsLoggingIn(false);
        return;
      }
      await supabase?.auth.setSession({
        access_token: response.data?.session?.access_token,
        refresh_token: response.data?.session?.refresh_token,
      });
      setIsLoggingIn(false);
    } catch (error) {
      console.error(error);
      setError("An error occurred");
      setIsLoggingIn(false);
    }
  };
  if (isLoggingIn)
    return (
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-text-primary"></div>
        Logging in...
      </div>
    );

  return (
    <>
      <Input
        label="Email"
        id="email"
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          borderRadius: authConfig.appearance.input.borderRadius || "3px",
        }}
        placeholder={
          config?.appearance?.input?.placeholders?.email ||
          "eg. ILoveMoon@gmail.com"
        }
      />
      <Input
        label="Password"
        id="password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={
          config?.appearance?.input?.placeholders?.password || "******"
        }
      />
      <Button onClick={handleLoginEmail} color="successColor">
        Login
      </Button>
      {error && <div className="text-red-500">{error}</div>}
    </>
  );
};

export default EmailLogin;
