import { IconCheck, IconCopy } from '@/assets/icons';
import { Modal } from '@/components';
import { useTokenInfo } from '@/utils/react-coinghecko';
import { shortenAddress } from '@/utils/shortenAddress';
import React, { useState } from 'react';

export type TokenInfoModalProps = {
  isOpen: boolean;
  toggleModal: () => void;
  cgTokenId: string;
};

export const TokenInfoModal: React.FC<TokenInfoModalProps> = ({
  isOpen,
  cgTokenId,
  toggleModal,
}) => {
  const [wasCopied, setWasCopied] = useState('');
  const { data: tokenInfo } = useTokenInfo(cgTokenId);
  if (!tokenInfo) return null;
  const copyToClipBoard = (text: string) => {
    navigator.clipboard.writeText(text);
    setWasCopied(text);
    setTimeout(() => {
      setWasCopied('');
    }, 2000);
  };
  console.log('tokeninfo', tokenInfo);
  return (
    <Modal isOpen={isOpen} toggleModal={toggleModal}>
      <h2 className="text-xl font-semibold mb-4">Token Info</h2>
      <div className="mb-4 flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="h-10 relative bg-background-primary rounded-sm flex items-center justify-center">
            <span className="text-text-secondary text-sm absolute top-2 left-2">
              label
            </span>
            <span className="text-text-primary">Value</span>
          </div>
          <div className="relative bg-background-primary rounded-sm flex flex-col p-3 gap-3">
            <span className="ml-3 text-text-secondary">label</span>
            <span className="ml-3 text-text-primary">Value</span>
          </div>
        </div>

        <div className="bg-background-primary rounded-sm flex flex-col p-3 gap-3">
          <div className="flex justify-left items-center ">
            <img
              src={tokenInfo?.image.small}
              alt="Token Icon"
              className="w-10 h-10 mr-3"
            />
            <span className="text-text-primary">{tokenInfo?.name}</span>
            <span className="ml-3 text-text-secondary">
              ${tokenInfo?.market_data.current_price.usd}
            </span>
          </div>
          <div className="max-h-[200px] overflow-y-scroll">
            <span className="text-text-secondary">
              {tokenInfo.description.en}
            </span>
          </div>
        </div>
        <div className="max-h-[100px] overflow-y-scroll">
          <h4 className="text-text-secondary text-bold">Chain Addresses</h4>
          {Object.keys(tokenInfo.platforms).map((platform) => (
            <div className="flex justify-between" key={platform}>
              <span className="text-text-primary">{platform}:</span>
              <span className="text-text-secondary flex">
                {shortenAddress(tokenInfo.platforms[platform])}
                <div
                  className="ml-3"
                  onClick={() => copyToClipBoard(tokenInfo.platforms[platform])}
                >
                  {wasCopied == tokenInfo.platforms[platform] ? (
                    <IconCheck className="w-4 h-4 ml-1 text-success-color" />
                  ) : (
                    <IconCopy className="w-4 h-4 ml-1 text-text-primary opacity-50 cursor-pointer hover:opacity-100" />
                  )}
                </div>
              </span>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};
