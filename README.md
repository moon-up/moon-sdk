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


## @moonup/types: 
Typescript types for all packages
### usage
Install the package
```bash
npm install @moonup/types
```
Import the types
```typescript
import { Moon } from '@moonup/types'
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
import { MoonAPI } from '@moonup/moon-api'
```



## @moonup/moon-sdk: 
Core entry point which will handle everything from jwt token storage to network changes etc, as well as sub class initialisation

### usage
Install the package
```bash
npm install @moonup/moon-sdk
```


## @moonup/ethers: 
ethers.js provider and signer classes
### usage
Install the package
```bash
npm install @moonup/ethers
```


## @moonup/wagmi-connector:
Wagmi connector
### usage
Install the package
```bash
npm install @moonup/wagmi-connector
```

## @moonup/rainbowkit
Rainbow kit library
### usage
Install the package
```bash
npm install @moonup/rainbowkit
```