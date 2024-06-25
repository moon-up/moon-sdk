import {
  startAuthentication,
  startRegistration,
} from "@simplewebauthn/browser";
import { useState } from "react";
import { useMoonSDK } from "@hooks/index";
import "../../index.css";
import React from "react";

function WebAuthnComponent() {
  const [email, setEmail] = useState("");
  const { supabase } = useMoonSDK();

  const handleLogin = async () => {
    const publicKey = await fetch(
      "https://dash.usemoon.ai/api/webauthn/login",
      {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => res.json());
    console.log(publicKey);

    const credential = await startAuthentication(publicKey.optionsAuth);

    const auth = await fetch(
      "https://dash.usemoon.ai/api/webauthn/login/verify",
      {
        method: "POST",
        body: JSON.stringify({
          ...credential,
          username: email,
        }),
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => res.json());

    // moon?.connect(auth.token.access_token, auth.token.refresh_token);
    // set the session
    await supabase?.auth.setSession({
      access_token: auth.token.access_token,
      refresh_token: auth.token.refresh_token,
    });
  };

  const handleRegister = async () => {
    const publicKey = await fetch(
      "https://dash.usemoon.ai/api/webauthn/register",
      {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => res.json());
    console.log(publicKey);

    const credential = await startRegistration(publicKey.options);

    await fetch("https://dash.usemoon.ai/api/webauthn/register/verify", {
      method: "POST",
      body: JSON.stringify({
        ...credential,
        email: email,
        user: {
          ...publicKey.options.user,
        },
      }),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div className="p-8 bg-white rounded shadow-md w-80">
      <h2 className="mb-4 text-xl font-semibold text-gray-700">
        Login with WebAuthn
      </h2>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
        placeholder="Email"
      />
      <button
        onClick={handleLogin}
        className="w-full px-3 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      >
        Login
      </button>
      <button
        onClick={handleRegister}
        className="mt-4 w-full px-3 py-2 text-white bg-green-500 rounded-lg hover:bg-green-700 focus:outline-none focus:shadow-outline"
      >
        Register
      </button>
    </div>
  );
}

export default WebAuthnComponent;
