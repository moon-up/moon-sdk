import React, { useState } from "react";
import Input from "@/components/Input/Input";
import { useMoonSDK } from "@/index";
import { AuthModalConfig } from "@/types";
import Button from "@/components/Button/Button";

interface SignupFormProps {
  config: AuthModalConfig;
  onSuccess: any;
  onCancel: any;
}

export const SignupForm = ({
  onSuccess,
  onCancel,
  config,
}: SignupFormProps) => {
  const [isSigningUp, setSigningUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { supabase, authConfig } = useMoonSDK();

  const handleSignupEmail = async () => {
    try {
      setSigningUp(true);
      if (!supabase) return;
      const authResponse = await supabase.auth.signUp({
        email,
        password,
      });
      console.log("handleSignupEmail response", authResponse);
      if (authResponse.error) {
        console.error(authResponse.error.message);
        setError(authResponse.error.message);
        setSigningUp(false);
        return;
      }
      onSuccess();
      setSigningUp(false);
    } catch (err) {
      console.error(err);
      setError("An error occurred");
      setSigningUp(false);
    }
  };

  if (isSigningUp)
    return (
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-text-primary"></div>
        Signing you up...
      </div>
    );
  return (
    <div
      className={`p-${config.appearance.modal.padding} justify-center items-center flex flex-col gap-5`}
    >
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
      <Button onClick={handleSignupEmail} color="infoColor">
        Sign Up
      </Button>
      {error && <div className="text-red-500">{error}</div>}

      <h3
        className="text-text-secondary hover:cursor-pointer hover:underline"
        onClick={onCancel}
      >
        Back to Login
      </h3>
    </div>
  );
};
