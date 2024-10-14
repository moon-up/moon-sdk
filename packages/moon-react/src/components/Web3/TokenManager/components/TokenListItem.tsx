import { IconDots, IconGas } from '@/assets/icons';
import { minAddress } from '@/utils/shortenAddress';
import React from 'react';
import { UserToken } from '../types';

export type TokenListItemProps = {
  token: UserToken;
  onDotsClick: () => void;
};

export const TokenListItem: React.FC<TokenListItemProps> = ({
  token,
  onDotsClick,
}) => (
  <li
    key={token.address + token.chainId + token.wallet}
    className="relative flex mb-2 justify-start py-2 px-3 gap-4 items-center bg-background-primary rounded-sm min-w-[300px] border-2 border-transparent hover:border-2 hover:border-accent-color hover:shadow-lg cursor-pointer"
  >
    {token.isGasToken ? (
      <IconGas className="w-10 h-10 text-accent-color" />
    ) : (
      <img src={token.icon} alt="Token Icon" className="w-10 h-10" />
    )}
    <p className="absolute left-3 top-0 rounded-lg py-0 px-1 text-xs">
      {minAddress(token.wallet)}
    </p>
    <p className="absolute left-1 bottom-1 bg-accent-color rounded-lg py-0 px-1 text-xs">
      {token.chainId}
    </p>

    <div className="flex flex-col mr-10 w-[100px]">
      <span className="text-text-primary whitespace-nowrap overflow-hidden text-ellipsis">
        {token.name}
      </span>
      <span className="text-text-secondary">{token.symbol}</span>
    </div>
    <div className="flex flex-col  w-[100px] ">
      <span className="text-text-primary whitespace-nowrap overflow-hidden text-ellipsis">
        {token?.balance || '0'}
      </span>
      <span className="text-text-secondary whitespace-nowrap overflow-hidden text-ellipsis">
        ${parseFloat(token?.balance || '0') * (token.price || 0)}
      </span>
    </div>
    <div
      className="flex text-text-primary cursor-pointer w-6 h-6 opacity-50 hover:opacity-100"
      onClick={onDotsClick}
    >
      <IconDots style={{ width: '1.5rem', height: '1.5rem' }} />
    </div>
  </li>
);
