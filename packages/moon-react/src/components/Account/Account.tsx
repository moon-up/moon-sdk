import { useEffect } from "react";
import { useMoonSDK } from "../../context";
import { useAccount, useConnect, useSwitchChain } from "wagmi";

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

  const getBalance = async (wallet: string) => {
    // moon connector
    console.log(connectors);
    const conn = connectors.find((connector) => connector.name === "Moon");
    console.log(conn);
    setWallet(wallet);
    console.log("wallet", wallet);
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

export default Account;
