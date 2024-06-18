import {
  startAuthentication,
  startRegistration,
} from '@simplewebauthn/browser';
import { useEffect, useState } from 'react';
import { SiweMessage } from 'siwe';
import { useAccount, useConnect, useSignMessage, useSwitchChain } from 'wagmi';
import { useMoonSDK } from './context';

import React from 'react';
import './index.css';

function WebAuthnComponent() {
  const [email, setEmail] = useState('');
  const { supabase } = useMoonSDK();

  const handleLogin = async () => {
    const publicKey = await fetch(
      'https://dash.usemoon.ai/api/webauthn/login',
      {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      }
    ).then((res) => res.json());
    console.log(publicKey);

    const credential = await startAuthentication(publicKey.optionsAuth);

    const auth = await fetch(
      'https://dash.usemoon.ai/api/webauthn/login/verify',
      {
        method: 'POST',
        body: JSON.stringify({
          ...credential,
          username: email,
        }),
        headers: { 'Content-Type': 'application/json' },
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
      'https://dash.usemoon.ai/api/webauthn/register',
      {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      }
    ).then((res) => res.json());
    console.log(publicKey);

    const credential = await startRegistration(publicKey.options);

    await fetch('https://dash.usemoon.ai/api/webauthn/register/verify', {
      method: 'POST',
      body: JSON.stringify({
        ...credential,
        email: email,
        user: {
          ...publicKey.options.user,
        },
      }),
      headers: { 'Content-Type': 'application/json' },
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
function Oauth2Button() {
  const handleClick = () => {
    const response_type = process.env.REACT_APP_RESPONSE_TYPE;
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
    const scope = process.env.REACT_APP_SCOPE;
    const state = process.env.REACT_APP_STATE;

    const redirectUrl = `https://dash.usemoon.ai/authorize?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}`;

    window.location.href = redirectUrl;
  };

  return (
    <button
      onClick={handleClick}
      className="w-full px-3 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
    >
      Login with Moon
    </button>
  );
}

function Account() {
  const { address, status } = useAccount();
  const { connectors, connect } = useConnect();
  const { chains, switchChain } = useSwitchChain();
  // const { switchAccount } = useSwitchAccount();
  // const { disconnect } = useDisconnect();
  // const { data: ensName } = useEnsName({ address });
  // const { data: ensAvatar } = useEnsAvatar({ name: ensName! });
  const {
    moon,
    session,
    supabase,
    wallets,
    ethers,
    signOut,
    createWallet,
    setWallet,
    listWallets,
  } = useMoonSDK();
  useEffect(() => {
    listWallets();
  }, [listWallets]);

  if (!moon) {
    return <div>Loading...</div>;
  }
  if (!session) {
    return <div>Loading...</div>;
  }
  if (!supabase) {
    return <div>Loading...</div>;
  }

  const getBalance = async (wallet: string) => {
    // moon connector
    console.log(connectors);
    const conn = connectors.find((connector) => connector.name === 'Moon');
    console.log(conn);
    setWallet(wallet);
    console.log('wallet', wallet);
    const kek = await ethers?.getBalance(wallet);
    console.log(kek?.toNumber());
    // const uwu = await conn?.connect({ chainId: 1, isReconnecting: true });
    // console.log(uwu);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <div className="text-center text-xl font-semibold text-gray-700">
            <p>Welcome, {session?.user?.email}</p>
            {address && <p>Address: {address}</p>}
            {status && <p>Status: {status}</p>}
          </div>
        </div>
        <div>
          {wallets && wallets.length > 0 ? (
            <div>
              <div className="text-center text-xl font-semibold text-gray-700">
                Wallets
              </div>

              {wallets.map((wallet) => (
                <div
                  key={wallet}
                  className="text-center text-xl font-semibold text-gray-700"
                  onClick={() => getBalance(wallet)}
                >
                  {wallet}
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div className="text-center text-xl font-semibold text-gray-700">
                No wallets connected
              </div>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-2"
                onClick={createWallet}
              >
                create wallet
              </button>
            </div>
          )}
        </div>
        {/* {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
        {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
        <button onClick={() => disconnect()}>Disconnect</button> */}
        <div>
          <div className="text-center text-xl font-semibold text-gray-700">
            Providers
          </div>

          <ul>
            <li>
              {connectors.map((connector) => (
                <button
                  key={connector.uid}
                  onClick={() => connect({ connector })}
                >
                  {connector.name}
                </button>
              ))}
            </li>
          </ul>
        </div>
        <div>
          <div className="text-center text-xl font-semibold text-gray-700">
            chains
          </div>
          <ul>
            <li>
              {chains.map((chain) => (
                <button
                  key={chain.id}
                  onClick={() => switchChain({ chainId: chain.id })}
                >
                  {chain.name}
                </button>
              ))}
            </li>
          </ul>
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-2"
          onClick={signOut}
        >
          sign out
        </button>
      </div>
    </div>
  );
}

function SignInAnonymously() {
  const { supabase } = useMoonSDK();

  const signInAnonymously = async () => {
    const auth = await supabase?.auth.signInAnonymously();
    if (auth && auth.error) {
      console.error('An error occurred:', auth.error);
    } else {
      console.log('User:', auth?.data);
    }
  };

  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-2"
      onClick={signInAnonymously}
    >
      Sign in Anonymously
    </button>
  );
}

type WalletOption = {
  name: string;
  icon: string;
};

type AuthModalProps = {
  wallets: WalletOption[];
  socialLogins: WalletOption[];
  modalTitle: string;
  appearance: {
    buttonTitle?: string;
    modalTitleIcon?: string;
    showBranding?: boolean;
    welcomeTitle?: string;
    welcomeSubtitle?: string;
    splashImage?: string;
    buttonText: string;
  };
  theming: {
    accentColor: string;
    backgroundColor: string;
    textColor: string;
    buttonColor: string;
  };
};

const AuthModal: React.FC<AuthModalProps> = ({ appearance, theming }) => {
  const [showModal, setShowModal] = useState(false);
  const { session, supabase } = useMoonSDK();
  const { isConnected, address } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { connectors, connect } = useConnect();
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const connectToMoon = async () => {
      if (!address) return;

      try {
        const nonceResponse = await fetch(
          'https://beta.usemoon.ai/auth/ethereum/nonce',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ address }),
          }
        );

        const { user } = await nonceResponse.json();
        console.log(user.at(0).auth.genNonce);
        const message = new SiweMessage({
          domain: window.location.host,
          address,
          statement: 'Sign in with Ethereum to the app.',
          uri: window.location.origin,
          version: '1',
          chainId: 1,
          nonce: user.at(0).auth.genNonce,
        });
        const signedMessage = await signMessageAsync({
          message: message.prepareMessage(),
        });

        const response = await fetch(
          'https://beta.usemoon.ai/auth/ethereum/login',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              address,
              signedMessage,
              nonce: user.at(0).auth.genNonce,
              message: message.prepareMessage(),
            }),
          }
        ).then((res) => res.json());

        await supabase?.auth.setSession({
          access_token: response.token.access_token,
          refresh_token: response.token.refresh_token,
        });
      } catch (err) {
        console.error('An error occurred:', err);
      }
    };

    if (!session && isConnected) {
      connectToMoon();
    }
  }, [isConnected, session, address, signMessageAsync, supabase?.auth]);

  const buttons = [
    {
      type: 'oauth2',
      color: 'blue-600',
      hoverColor: 'blue-700',
      text: 'Moon Oauth2',
      icon: '',
      component: <Oauth2Button />,
    },
    {
      type: 'webauthn',
      color: 'blue-600',
      hoverColor: 'blue-700',
      text: 'Moon PassKey',
      icon: '',
      component: <WebAuthnComponent />,
    },
    {
      type: 'anon',
      color: 'blue-600',
      hoverColor: 'blue-700',
      text: 'Moon Anon',
      icon: '',
      component: <SignInAnonymously />,
    },
  ];

  connectors.forEach((connector) => {
    if (!buttons.some((button) => button.text === connector.name)) {
      buttons.push({
        type: 'connector',
        color: 'blue-600',
        hoverColor: 'blue-700',
        text: connector.name,
        icon: '',
        component: (
          <div key={connector.uid} className="flex flex-col items-center">
            <button
              onClick={() => connect({ connector })}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Connect
            </button>
          </div>
        ),
      });
    }
  });

  return (
    <>
      <button
        className={`${theming.buttonColor} text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
        type="button"
        onClick={() => setShowModal(true)}
      >
        {appearance.buttonTitle || appearance.buttonText}
      </button>

      {showModal && (
        <>
          <div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            onClick={() => setShowModal(false)}
          ></div>

          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="text-white w-full flex items-center justify-center">
                  <div className="bg-gray-800 p-8 rounded-lg">
                    {!session ? (
                      <div className="grid grid-cols-2 grid-rows-1 gap-4">
                        <div className="flex flex-col items-center">
                          <img src="/public/Moon_B.png" alt="logo" />
                          <div className="mb-4">
                            {buttons.map((button, index) => (
                              <button
                                key={index}
                                className={`bg-${button.color} hover:bg-${
                                  button.hoverColor
                                } text-white font-bold py-2 px-4 rounded w-full mb-2 ${
                                  selectedTab === index ? 'active' : ''
                                }`}
                                onClick={() => setSelectedTab(index)}
                              >
                                <img src={button.icon} alt={button.text} />
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          {buttons[selectedTab]?.component}
                        </div>
                      </div>
                    ) : (
                      <Account />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

const App: React.FC = () => {
  const wallets: WalletOption[] = [
    { name: 'MetaMask', icon: 'metamask-icon.png' },
    { name: 'Coinbase', icon: 'coinbase-icon.png' },
    { name: 'WalletConnect', icon: 'walletconnect-icon.png' },
    { name: 'Trust', icon: 'trust-icon.png' },
    { name: 'Rainbow', icon: 'rainbow-icon.png' },
    { name: 'Phantom', icon: 'phantom-icon.png' },
  ];

  const socialLogins: WalletOption[] = [];

  return (
    <div className="App">
      <AuthModal
        wallets={wallets}
        socialLogins={socialLogins}
        modalTitle="Connect"
        appearance={{
          buttonText: 'Connect Wallet',
          showBranding: true,
          welcomeTitle: 'Your gateway to the decentralized world',
          welcomeSubtitle: 'Connect a wallet to get started',
        }}
        theming={{
          accentColor: '#0066ff',
          backgroundColor: '#dfdfdf',
          textColor: '#1a1523',
          buttonColor: 'bg-blue-600',
        }}
      />
    </div>
  );
};

export default App;
