# Moon Packages

# authentication

## oauth2
You can authenticate moon with either oauth2 or siwe.

### redirect 
```typescript
function LoginButton() {
  const handleClick = () => {
    const response_type = process.env.REACT_APP_RESPONSE_TYPE;
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
    const scope = process.env.REACT_APP_SCOPE;
    const state = process.env.REACT_APP_STATE;

    const redirectUrl = `https://moon-wallet-supabase-next-app.vercel.app/authorize?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}`;

    window.location.href = redirectUrl;
  };

  return <button onClick={handleClick}>Login with Moon</button>;
}

export default LoginButton;

```

### callback
```typescript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMoonSDK } from '../hooks/moon';

function OAuth2Callback() {
  const location = useLocation();
  const { moon } = useMoonSDK();

  useEffect(() => {
    async function fetchData() {
      const urlParams = new URLSearchParams(location.search);
      const code = urlParams.get('code');

      if (code) {
        try {
          const response = await fetch(`http://localhost:4000/callback?code=${code}`, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          console.log(data);
          moon?.setAccessToken(data.access_token, data.refresh_token);
        } catch (error) {
          // Handle the error here
          console.error(error);
        }
      }
    }

    fetchData();
  }, [location]);

  return <div>Processing OAuth2 callback...</div>;
}

export default OAuth2Callback;

```
### token exchange + set session
```typescript
app.get('/callback', async (req: Request, res: Response) => {
  try {
    const { code, state } = req.query;
    console.log(process.env.REACT_APP_CLIENT_GRANT_TYPE);
    const response = await axios.post(
      'https://moon-wallet-supabase-next-app.vercel.app/api/oauth2/exchange',
      {
        grant_type: process.env.REACT_APP_GRANT_TYPE,
        code: code,
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    res.cookie('sb-api-auth-token', response.data);

    res.json(response.data);
  } catch (e: any) {
    console.log(e);
    return res.status(500).json({
      error: 'Server error. Try again with a different prompt.',
      success: false,
    });
  }
});
```

## siwe 
```typescript
import { signMessage } from '@wagmi/core';
import { SiweMessage } from 'siwe';

import { useAccount } from 'wagmi';
const MoonSIWE = async (addres) => {
    const userAddress = address ? address : '';

    try {
        // 1. Get a nonce from the server
        const nonceResponse = await fetch(`https://moon-wallet-supabase-next-app.vercel.app/api/ethereum/nonce`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                address: userAddress,
            }),
        });

        const {
            user: [user],
        } = await nonceResponse.json();

        // 2. Ask the user to sign a message
        const message = new SiweMessage({
            domain: window.location.host,
            address: address,
            statement: 'Sign in with Ethereum to the app.',
            uri: window.location.origin,
            version: '1',
            chainId: 1,
            nonce: user.auth.genNonce,
        });
        const signedMessage = await signMessage({
            message: message.prepareMessage(),
        });

        // // 3. Send the signed message to our API
        const response = await fetch(`https://moon-wallet-supabase-next-app.vercel.app/api/ethereum/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                address: userAddress,
                signedMessage: signedMessage,
                nonce: user.auth.genNonce,
                message: message.prepareMessage(),
            }),
        }).then((res) => res.json());

        if (response.ok) {
        // The verification was successful
        moon.setAccessToken(data.access_token, data.refresh_token);
        console.log('Verification successful!');
        } else {
        // The verification failed
        console.error('Verification failed!');
        }
    } catch (err) {
        console.error('An error occurred:', err);
    }
}
```



# @moonup Moon Packages


## Usage
Packages are published to npm under the @moonup scope. To install a package, run:
```bash
npm install @moonup/<package-name>
```
Refer to the documentation for each package for usage instructions.
(https://docs.usemoon.ai)[https://docs.usemoon.ai]


## @moonup/moon-types: 
Typescript types for all packages
### usage
Install the package
```bash
npm install @moonup/moon-types
```
Import the types
```typescript
import { MOON_SUPPORTED_NETWORKS } from '@moonup/types'
```
## @moonup/moon-sdk:
Core entry point which will handle everything from jwt token storage to network changes etc, as well as sub class initialisation
### usage
Install the package
```bash
npm install @moonup/moon-sdk
```
import the sdk
```typescript
import { MoonSDK } from '@moonup/moon-sdk'
const sdk = new MoonSDK()
const account = "";
const abi = [];
const contract = new ethers.Contract("", abi);
const data = contract.methods['deposit'](params1, param2).encodeABI();
    const raw_tx = await sdk 
      .getAccountsSDK()
      .signTransaction(acccount, {
        to: '0x8b57148723f938235afabdb8b070c78f9ccea6b0',
        data: data
        gasPrice: '1000000000',
        gas: '200000',
        nonce: '0',
        chain_id: '1891',
        encoding: 'utf-8',
        value: '0',
      })
```

## @moonup/moon-api: 
Moon API client

### usage
Install the package
```bash
npm install @moonup/moon-api
```

import the client
```typescript
import { Accounts, ContentType } from '@moonup/moon-api'
const baseApiParams: ApiConfig = {
    baseUrl:
    'https://moon-vault-api-git-ew-supabase-migration-moonup.vercel.app',
    baseApiParams: {
        secure: true,
        type: ContentType.Json,
        format: 'json',
    }
},
// eslint-disable-next-line @typescript-eslint/no-explicit-any
securityWorker: async (securityData: any) => {
    return Promise.resolve({
        headers: {
            Authorization: `Bearer ${securityData.token}`,
        },
    });
    },
};
const accounts = new Accounts(baseApiParams);
accounts..setSecurityData({
    token: token,
});
const newAccount = await accounts.createAccount({})
const accounts = await accounts.listAccounts()
```

## @moonup/ethers: 
ethers.js provider and signer classes
### usage
Install the package
```bash
npm install @moonup/ethers
```
import the provider
```typescript
import {MoonSDK} from '@moonup/moon-sdk'
import { MoonProvider } from '@moonup/ethers'
const sdk = new MoonSDK()
const config: MoonProviderOptions = {
    chainId: 80001 
    SDK: sdk;
    address: '';
}
const provider = new MoonProvider(config)
provider.updateConfig({
    chainId: 80001,
    address: '0x000',
})
```


## @moonup/wagmi-connector:
Wagmi connector
### usage
Install the package
```bash
npm install @moonup/wagmi-connector
```

## @moonup/moon-rainbowkit
Rainbow kit library
### usage
Install the package
```bash
npm install @moonup/moon-rainbowkit
```

## @moonup/viem
Viem library
### usage
Install the package
```bash
npm install @moonup/viem
```
import the provider
```typescript
import { MoonSDK } from '@moonup/moon-sdk'
import { createAccount } from '@moonup/viem'
const sdk = new MoonSDK()
const config = {
    SDK: sdk,
    ethereumAddress: '0x000',
}
const viem = createAccount(config)
const account = await viem.getAccount()
```

## @moonup/moon-react
React components
### usage
Install the package
```bash
npm install @moonup/moon-react
```

