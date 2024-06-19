import { useState } from "react";
import { useMoonSDK } from "../../context";
import { AuthModalConfig } from "../../types";
import Button from "../Button/Button";

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

  return (
    <>
      <div className="w-full">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-text-secondary"
        >
          Email
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className={`block w-full rounded-${authConfig.appearance.input.borderRadius} border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            placeholder={
              config?.appearance?.input?.placeholders?.email ||
              "eg. ILoveMoon@gmail.com"
            }
          />
        </div>
      </div>
      <div className="w-full">
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-text-secondary"
        >
          Password
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            className={`block w-full rounded-${authConfig.appearance.input.borderRadius} border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            placeholder={
              config?.appearance?.input?.placeholders?.password || "******"
            }
          />
        </div>
      </div>
      <Button onClick={handleLoginEmail} color="successColor">
        Login
      </Button>
    </>
  );
};

export default EmailLogin;
