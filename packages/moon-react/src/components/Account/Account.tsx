import {
  Button,
  ChainSelector,
  ChainSelectorModal,
  WalletSelector,
  WalletSelectorModal,
} from '@/components';
import { useAave, useMoonAccount, useMoonSDK } from '@/hooks';
import React, { useEffect } from 'react';
import { useAccount, useConnect, useSwitchChain } from 'wagmi';
// load api
import {
  AnyTokenSelectorModal,
  ChatBot,
  LifiChainSelectorModal,
  LifiTokenSelectorModal,
  SwapInterface,
  UserTokenManager,
} from '@/components';

export function Account() {
  const { address, status } = useAccount();
  const { connectors, connect } = useConnect();
  const { chains, switchChain } = useSwitchChain();
  // const { disconnect } = useDisconnect();
  // const { data: ensName } = useEnsName({ address });
  // const { data: ensAvatar } = useEnsAvatar({ name: ensName! });
  const {
    moon,
    chain,
    session,
    supabase,
    wallets,
    transactionHistory,
    signOut,
    createWallet,
    setWallet,
    listWallets,
    setChatOpen,
    chatOpen,
    listChains: getChains,
  } = useMoonSDK();
  const { deleteAccount } = useMoonAccount();

  const { getAaveV3PoolAddress } = useAave();
  useEffect(() => {
    listWallets();
    getChains();
  }, []);

  if (!moon) {
    return <div>Loading...</div>;
  }
  if (!session) {
    return <div>Loading...</div>;
  }
  if (!supabase) {
    return <div>Loading...</div>;
  }
  const conveyorTx = transactionHistory.filter(
    (tx) => tx.type === 'conveyorFinanceSwap'
  );
  console.log('Tx History', conveyorTx);
  const getBalance = async (wallet: string) => {
    // moon connector
    console.log(connectors);
    const conn = connectors.find((connector: any) => connector.name === 'Moon');
    console.log(conn);
    setWallet(wallet);
    console.log('wallet', wallet);
    // const kek = await ethers?.getBalance(wallet);
    // console.log(kek?.toNumber());
    // const uwu = await conn?.connect({ chainId: 1, isReconnecting: true });
    // console.log(uwu);
  };

  const [lifiChainKey, setLifiChainKey] = React.useState<string | undefined>();
  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-background-primary h-[100vh] overflow-scroll">
      <div className="bg-background-secondary w-full rounded-xl flex flex-col items-center justify-center text-text-primary p-4">
        <div className="text-center text-xl font-semibold">
          <p>Welcome, {session?.user?.email}</p>
          {address && <p>Address: {address}</p>}
          {status && <p>Status: {status}</p>}
          {chain && <p>Chain: {chain.name}</p>}
        </div>
      </div>
      <div className="bg-background-secondary w-full rounded-xl flex flex-col items-center justify-center text-text-primary p-4">
        {wallets && wallets.length > 0 ? (
          <div>
            <div className="text-center text-xl font-semibold">Wallets</div>

            <p>Dropdown</p>
            <WalletSelector
              selectProps={{
                className:
                  'max-h-[300px] bg-accent-color rounded-xl p-3 m-1 text-text-primary',
              }}
            />
            <p>Modal</p>
            <WalletSelectorModal
              title="Wallet Selector"
              inputProps={{
                label: 'Select Wallet',
              }}
            />

            {wallets.map((wallet) => (
              <div
                key={wallet}
                className="text-center text-xl flex gap-4 items-center justify-center mb-1"
                onClick={() => getBalance(wallet)}
              >
                {wallet}{' '}
                <Button
                  className="bg-red-500"
                  onClick={async () => {
                    await deleteAccount(wallet);
                  }}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="text-center text-xl font-semibold">
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

      <div className="bg-background-secondary w-full rounded-xl flex flex-col items-center justify-center text-text-primary p-4">
        <div className="text-center text-xl font-semibold">Moon Chains</div>
        <p>Dropdown</p>
        <ChainSelector
          selectProps={{
            className:
              'max-h-[300px] bg-accent-color rounded-xl p-3 m-1 text-text-primary',
          }}
        />
        <p>Modal</p>
        <ChainSelectorModal
          title="Chain Selector"
          inputProps={{
            label: 'Select Chain',
          }}
        />
      </div>

      <div className="bg-background-secondary w-full rounded-xl flex flex-col items-center justify-center text-text-primary p-4">
        <div className="text-center text-xl font-semibold">Lifi</div>
        <p>Dropdown</p>
        <LifiChainSelectorModal
          onSelect={(chainId: string) => {
            console.log(chainId);
            setLifiChainKey(chainId);
          }}
        />
        <p>Modal</p>
        <LifiTokenSelectorModal
          initialTokenChain={lifiChainKey}
          onSelect={(chainId: string) => {
            console.log(chainId);
          }}
        />
      </div>

      {/* {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
        {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
        <button onClick={() => disconnect()}>Disconnect</button> */}
      <div className="bg-background-secondary w-full rounded-xl flex flex-col items-center justify-center text-text-primary p-4">
        <div className="text-center text-xl font-semibold">Providers</div>

        <ul>
          <li>
            {connectors.map((connector: any) => (
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
      <div className="bg-background-secondary w-full rounded-xl flex flex-col items-center justify-center text-text-primary p-4">
        <div className="text-center text-xl font-semibold">Wagmi chains</div>
        <ul>
          <li>
            {chains.map((chain: any) => (
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

      <div className="bg-background-secondary w-full rounded-xl flex flex-col items-center justify-center text-text-primary p-4">
        <div className="text-center text-xl font-semibold">Token Manager</div>
        <UserTokenManager />
      </div>

      <div className="bg-background-secondary w-full rounded-xl flex flex-col items-center justify-center text-text-primary p-4">
        <div className="text-center text-xl font-semibold">Swap Interface</div>
        <SwapInterface />
      </div>

      <div className="bg-background-secondary w-full rounded-xl flex flex-col items-center justify-center text-text-primary p-4">
        <div className="text-center text-xl font-semibold">Receipt</div>
        {/* <TransactionReceipt
          txHash={
            conveyorTx[conveyorTx.length - 1]?.data?.tx?.signed?.transactions[0]
              ?.transaction_hash
          }
          from={conveyorTx[conveyorTx.length - 1]?.data?.tx?.from}
          to={conveyorTx[conveyorTx.length - 1]?.data?.tx?.to}
          value={conveyorTx[conveyorTx.length - 1]?.data?.tx?.value} // 1 ETH in wei
          gasUsed={conveyorTx[conveyorTx.length - 1]?.data?.tx?.gas}
          blockNumber={12345678}
          status="success"
          timestamp={1625097600}
          // txResult={conveyorTx[conveyorTx.length - 1]}
        /> */}
      </div>

      <div className="bg-background-secondary w-full rounded-xl flex flex-col items-center justify-center text-text-primary p-4">
        <div className="text-center text-xl font-semibold">
          Any Token Selector
        </div>
        <AnyTokenSelectorModal
          onSelect={(tokenAddress: string) => {
            console.log(tokenAddress);
          }}
        />
      </div>
      <ChatBot />
      <Button
        color="infoColor"
        onClick={async () => {
          const res = await getAaveV3PoolAddress(wallets[0], '10');
          console.log(res);
        }}
      >
        Get AaveV3Pool
      </Button>
      <Button
        color="infoColor"
        onClick={() => {
          setChatOpen(!chatOpen);
        }}
      >
        Open Chat
      </Button>
      <Button color="errorColor" onClick={signOut}>
        sign out
      </Button>
    </div>
  );
}

export default Account;
