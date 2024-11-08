import { useOdos } from '@/hooks';
import { OdosTokenMap } from '@/types';
import React, { useEffect, useState } from 'react';

type OdosTokenSelectorProps = {
  initialTokenAddress?: string;
  selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
  optionProps?: React.OptionHTMLAttributes<HTMLOptionElement>;
};

export const OdosTokenSelector = ({
  initialTokenAddress,
  selectProps,
  optionProps,
}: OdosTokenSelectorProps) => {
  const [selectedTokenAddress, setSelectedTokenAddress] = useState<
    string | undefined
  >(initialTokenAddress);
  const { supportedTokensQuery } = useOdos();

  useEffect(() => {
    if (selectedTokenAddress !== initialTokenAddress)
      setSelectedTokenAddress(initialTokenAddress);
  }, [initialTokenAddress]);

  const tokenData = supportedTokensQuery.isSuccess
    ? ((supportedTokensQuery.data as any).data.tokenMap as OdosTokenMap)
    : ({} as OdosTokenMap);

  return (
    <select
      className="max-h-[300px] bg-accent-color rounded-xl p-3 m-1 text-text-primary"
      value={selectedTokenAddress || ''}
      onChange={(e) => {
        setSelectedTokenAddress(e.target.value);
        if (selectProps?.onChange) selectProps.onChange(e);
      }}
      {...selectProps}
    >
      {Object.keys(tokenData).map((contractAddress: any) => (
        <option
          key={contractAddress}
          value={contractAddress}
          className="p-2"
          {...optionProps}
        >
          {tokenData[contractAddress].name} ({tokenData[contractAddress].symbol}
          )
        </option>
      ))}
    </select>
  );
};
