# @moonup Moon Packages


## Usage
Packages are published to npm under the @moonup scope. To install a package, run:
```bash
npm install @moonup/<package-name>
```
For example, to install the Moon API client, run:
```bash
npm install @moonup/moon-api
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

