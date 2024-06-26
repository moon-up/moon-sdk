import { ethers } from 'ethers';
import { useState } from 'react';
import { SiweMessage } from 'siwe';
import { useMoonSDK } from '../hooks/moon';

function SIWE() {
  const [accounts, setAccounts] = useState<string[]>([]);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const { moon } = useMoonSDK();
  const { ethereum } = window as any;
  const SIWE = async () => {
    if (typeof ethereum === 'undefined') {
      return;
    }

    const address = await ethereum
      .request({ method: 'eth_requestAccounts' })
      .then(function (accounts: any[]) {
        console.log(accounts);
        return accounts[0];
      });
    console.log(address);
    return fetch('https://beta.usemoon.ai/auth/ethereum/nonce', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        address: address,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);
        return ethereum.request({ method: 'eth_requestAccounts' }).then(function (accounts: any[]) {
          return [accounts[0], json.user[0].auth.genNonce];
        });
      })
      .then(function (args) {
        console.log(args);
        const account = args[0];
        const address = ethers.utils.getAddress(account);
        const message = new SiweMessage({
          domain: window.location.host,
          address: address,
          statement: 'Sign in with Ethereum to the app.',
          uri: window.location.origin,
          version: '1',
          chainId: 1,
          nonce: args[1],
        });

        const m = message.prepareMessage();
        return ethereum
          .request({
            method: 'personal_sign',
            params: [m, address],
          })
          .then(function (signature: any) {
            return [m, signature];
          });
      })
      .then(function (args) {
        console.log(args);
        return fetch('https://beta.usemoon.ai/auth/ethereum/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            message: args[0],
            signedMessage: args[1],
            address,
          }),
        });
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);
        moon?.setAccessToken(json.token.accessToken, json.token.refreshToken);
        // window.location.href = json.location;
      });
  };

  // useEffect(() => {
  //   if (moon?.isAuthenticated) {
  //     setLoggedIn(true);
  //     getAccounts();
  //   }
  // }, [moon]);

  // const createAccount = async () => {
  //   const account = await moon?.getAccountsSDK().createAccount({}, {});
  //   console.log(account);
  // };
  // const createBitcoinAccount = async () => {
  //   const account = await moon?.getBitcoinSDK().createBitcoinAccount({}, {});
  //   console.log(account);
  // };
  // const signMessage = async () => {
  //   const message = await moon?.getAccountsSDK().signMessage(accounts[0], {
  //     data: 'Hello World',
  //   });
  //   console.log(message);
  // };

  // const getAccounts = async () => {
  //   const accounts = await moon?.getAccountsSDK().listAccounts();
  //   const newAccounts = (accounts?.data.data as AccountResponse).keys || [];
  //   setAccounts(newAccounts);
  // };

  return (
    <div>
      {loggedIn ? (
        <h1>Logged In</h1>
      ) : (
        <button id="siw-ethereum" onClick={SIWE}>
          Connect with Ethereum
        </button>
      )}

      {accounts.length > 0 ? (
        <ul>
          {accounts.map((account, index) => (
            <li key={index}>{account}</li>
          ))}
        </ul>
      ) : (
        <p>No accounts available.</p>
      )}
    </div>
  );
}

export default SIWE;
