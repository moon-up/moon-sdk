import { useEffect } from "react";
import { useMoonSDK } from "@hooks/index";
import { useAccount, useConnect, useSwitchChain } from "wagmi";
import React from "react";
import Button from "../Button/Button";
import ChainSelector from "../public/ChainSelectors/ChainSelector";
import ChainSelectorModal from "../public/ChainSelectors/ChainSelectorModal";
import { WalletSelector } from "../public/WalletSelectors/WalletSelector";
import { WalletSelectorModal } from "../public/WalletSelectors/WalletSelectorModal";
// load api
import ChatBot from "../public/ChatBot/ChatBot";
import { UserTokenManager } from "../public/TokenManager";
import SwapInterface from "../public/SwapInterface/SwapInterface";
import TransactionReceipt from "../public/TransactionReceipt/TransactionReceipt";

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
    chain,
    session,
    supabase,
    wallets,
    ethers,
    transactionHistory,
    signOut,
    createWallet,
    setWallet,
    listWallets,
    setChatOpen,
    chatOpen,
    listChains: getChains,
  } = useMoonSDK();
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
  let conveyorTx = transactionHistory.filter(
    (tx) => tx.type === "conveyorFinanceSwap"
  );
  console.log("Tx History", conveyorTx);
  const getBalance = async (wallet: string) => {
    // moon connector
    console.log(connectors);
    const conn = connectors.find((connector: any) => connector.name === "Moon");
    console.log(conn);
    setWallet(wallet);
    console.log("wallet", wallet);
    const kek = await ethers?.getBalance(wallet);
    console.log(kek?.toNumber());
    // const uwu = await conn?.connect({ chainId: 1, isReconnecting: true });
    // console.log(uwu);
  };

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
                  "max-h-[300px] bg-accent-color rounded-xl p-3 m-1 text-text-primary",
              }}
            />
            <p>Modal</p>
            <WalletSelectorModal
              title="Wallet Selector"
              inputProps={{
                label: "Select Wallet",
              }}
            />

            {wallets.map((wallet) => (
              <div
                key={wallet}
                className="text-center text-xl"
                onClick={() => getBalance(wallet)}
              >
                {wallet}
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
              "max-h-[300px] bg-accent-color rounded-xl p-3 m-1 text-text-primary",
          }}
        />
        <p>Modal</p>
        <ChainSelectorModal
          title="Chain Selector"
          inputProps={{
            label: "Select Chain",
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
        <TransactionReceipt
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
        />
      </div>

      <ChatBot />
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
