import {
  FaDiscord,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
// import { useMoonSDK } from "../../context";
import { SocialLogins as SocialLoginsType } from "../../types";
import getEnvVariables from "../../utils/getEnvVariables";
import React from "react";

interface SocialLoginsProps {
  socialLogins: SocialLoginsType;
}

function SocialLogins({ socialLogins }: SocialLoginsProps) {
  // const { supabase } = useMoonSDK();

  // const monitorPopup = (authWindow: Window) => {
  //   return new Promise<any>((resolve, reject) => {
  //     if (!authWindow) {
  //       reject(new Error("Failed to open authentication window."));
  //     }
  //     const handleGoogleAuthEvent = (event: MessageEvent) => {
  //       console.log("event", event?.origin, event?.data);
  //       if (
  //         event.origin !== "https://vault-api.usemoon.ai" &&
  //         event.origin !== "http://localhost:3000" &&
  //         event.origin !== "https://dev580.d3b5lq7bvakykm.amplifyapp.com"
  //       ) {
  //         authWindow.close();
  //         reject(
  //           new Error(
  //             "Failed to authenticate with Google. WRONG ORIGIN" + event.origin
  //           )
  //         );
  //         return;
  //       }
  //       // check if event.data is string and contains code
  //       if (typeof event?.data !== "string" || !event?.data.includes("code=")) {
  //         return;
  //       }

  //       const url = `https://vault-api.usemoon.ai/auth/oauth/google/callback${event.data}}`;
  //       window.removeEventListener("message", handleGoogleAuthEvent);
  //       fetch(url)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           resolve(data);
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //           reject(new Error("Failed to authenticate with Google."));
  //         });
  //     };
  //     window.addEventListener("message", handleGoogleAuthEvent);
  //   });
  // };

  const signInOAuth = async () => {
    const env = getEnvVariables();
    if (!env) return;
    const redirectUrl = `https://dash.usemoon.ai/authorize?response_type=${env.responseType}&client_id=${env.clientId}&redirect_uri=${env.redirectUri}&scope=${env.scope}&state=${env.state}`;
    window.location.href = redirectUrl;

    // if (!supabase) return console.error("Supabase not initialized");
    // const { data, error } = await supabase.auth.signInWithOAuth({
    //   provider: "google",
    //   options: {
    //     redirectTo: "http://localhost:5176/",
    //   },
    // });

    // if (error) {
    //   console.error("Error signing in with Google:", error);
    // } else {
    //   console.log("User signed in:", data.provider);
    // }

    // const authWindow = window.open(
    //     "https://vault-api.usemoon.ai/auth/oauth/google/callback",
    //     "_blank"
    //   );
    //   if (authWindow) {
    //     authWindow.focus();
    //   }
    //   if (!authWindow) {
    //     console.log("Failed to open authentication window.");
    //     return;
    //   }
    //   try {
    //     const authData = await monitorPopup(authWindow);
    //     console.log("Authentication successful", authData);
    //   } catch (error) {
    //     console.error("Authentication failed:", error);
    //   }
  };

  if (!socialLogins) return null;
  return (
    <>
      {socialLogins.includes("discord") && (
        <div
          className="p-2 bg-accent-color w-min h-min rounded-xl border-2 border-transparent hover:border-white cursor-pointer"
          onClick={signInOAuth}
        >
          <FaDiscord size={30} />
        </div>
      )}

      {socialLogins.includes("github") && (
        <div
          className="p-2 bg-gray-900 w-min h-min rounded-xl border-2 border-transparent hover:border-white cursor-pointer"
          onClick={signInOAuth}
        >
          <FaGithub size={30} />
        </div>
      )}
      {socialLogins.includes("twitter") && (
        <div
          className="p-2 bg-sky-500 w-min h-min rounded-xl border-2 border-transparent hover:border-white cursor-pointer"
          onClick={signInOAuth}
        >
          <FaTwitter size={30} />
        </div>
      )}
      {socialLogins.includes("google") && (
        <div
          className="p-2 bg-zinc-50 w-min h-min rounded-xl border-2 border-transparent hover:border-accent-color cursor-pointer"
          onClick={signInOAuth}
        >
          <FcGoogle size={30} />
        </div>
      )}
    </>
  );
}

export default SocialLogins;
