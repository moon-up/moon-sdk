import coinbase from '@/assets/coinbase.svg';
import { IconWallet } from '@/assets/icons';
import metamask from '@/assets/metamask.svg';
import moonLogoLight from '@/assets/moon-logo-light.png';
import rabby from '@/assets/rabby.png';
import trustwallet from '@/assets/trustwallet.png';
import walletconnect from '@/assets/walletconnect.svg';
import { useConnectToMoon } from '@/hooks';
import React, { useMemo } from 'react';
import { useAccount, useConnect, useSignMessage } from 'wagmi';

export const useWalletConnectors = () => {
  const { connectors, connect } = useConnect();
  const { address } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const walletAddress = address ? address : '';
  const { connectToMoonSiwe } = useConnectToMoon({
    address: walletAddress,
    signMessageAsync,
  });

  const walletIcons: any = useMemo(
    () => ({
      MetaMask: <img src={metamask} />,
      'Coinbase Wallet': <img src={coinbase} width={60} />,
      'Rabby Wallet': <img src={rabby} width={60} />,
      Safe: <img src={trustwallet} width={60} />,
      Moon: <img src={moonLogoLight} width={60} />,
      WalletConnect: <img src={walletconnect} width={60} />,
      'Browser Wallet': <IconWallet className="w-[60px]" />,
    }),
    []
  );

  const handleConnect = async (connector: any) => {
    connect({ connector });
    connectToMoonSiwe();
  };

  //remove duplicate connectors
  const uniqueConnectors = connectors.filter(
    (v: any, i: any, a: any) => a.findIndex((t: any) => t.name === v.name) === i
  );

  return useMemo(
    () =>
      uniqueConnectors.map((connector: any) => ({
        type: 'connector',
        color: 'blue-600',
        hoverColor: 'blue-700',
        text: connector.name,
        icon: walletIcons[connector.name],
        component: (
          <div key={connector.uid} className="flex flex-col items-center">
            <button
              onClick={() => handleConnect(connector)}
              className="p-2 bg-accent-color w-80 h-30 rounded-xl flex items-center justify-center gap-2 text-text-primary hover:border-2 hover:border-text-primary hover:bg-accent-color hover:text-text-primary"
            >
              {walletIcons[connector.name] && walletIcons[connector.name]}
              {connector.name !== 'Moon' && connector.name}
            </button>
          </div>
        ),
      })),
    [connect, connectors, walletIcons]
  );
};
