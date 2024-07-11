import React from "react";
import { Modal } from "@/components";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { UserToken } from "../types";

type TokenModalProps = {
  isOpen: boolean;
  toggleModal: () => void;
  tokenInfo: any;
  cgToken: string;
  setCgToken: (value: string) => void;
  autocompleteOptions: any[];
  showAutocomplete: boolean;
  handleAutocompleteChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAutocompleteSelect: (token: any) => void;
  platforms: { [key: string]: string };
  selectedPlatform: string;
  handlePlatformChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  newToken: UserToken;
  setNewToken: (token: UserToken) => void;
  handleAddToken: () => void;
};

const TokenModal: React.FC<TokenModalProps> = ({
  isOpen,
  toggleModal,
  tokenInfo,
  cgToken,
  setCgToken,
  autocompleteOptions,
  showAutocomplete,
  handleAutocompleteChange,
  handleAutocompleteSelect,
  platforms,
  selectedPlatform,
  handlePlatformChange,
  newToken,
  setNewToken,
  handleAddToken,
}) => (
  <Modal isOpen={isOpen} toggleModal={toggleModal}>
    <h2 className="text-xl font-semibold mb-4">Add New Token</h2>
    <div className="mb-4 flex flex-col gap-2">
      {tokenInfo?.name && tokenInfo?.market_data?.current_price?.usd && (
        <div className="bg-background-primary rounded-sm flex flex-col p-3 gap-3">
          <div className="flex justify-left items-center ">
            <img
              src={tokenInfo?.image?.small}
              alt="Token Icon"
              className="w-10 h-10 mr-3"
            />
            <span className="text-text-primary">{tokenInfo?.name}</span>
            <span className="ml-3 text-text-secondary">
              ${tokenInfo?.market_data?.current_price?.usd}
            </span>
          </div>
          <div className="max-h-[60px] overflow-y-scroll">
            <span className="text-text-secondary">
              {tokenInfo?.description?.en}
            </span>
          </div>
        </div>
      )}
      <div className="relative">
        <Input
          label="CoinGecko ID"
          type="text"
          placeholder="CoinGecko ID"
          value={cgToken}
          onChange={handleAutocompleteChange}
          className="p-2 border rounded mb-2"
        />
        {showAutocomplete && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow-lg max-h-48 overflow-y-auto">
            {autocompleteOptions.map((token) => (
              <li
                key={token.id}
                onClick={() => handleAutocompleteSelect(token)}
                className="p-2 cursor-pointer hover:bg-gray-200 text-black"
              >
                {token.id} ({token.symbol})
              </li>
            ))}
          </ul>
        )}
      </div>
      {Object.keys(platforms).length > 0 && (
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700">
            Platform
          </label>
          <select
            value={selectedPlatform}
            onChange={handlePlatformChange}
            className="p-2 border rounded mb-2 w-full text-black"
          >
            {Object.keys(platforms).map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>
        </div>
      )}
      <Input
        label="Name"
        type="text"
        placeholder="Name"
        value={newToken.name}
        onChange={(e) => setNewToken({ ...newToken, name: e.target.value })}
        className="p-2 border rounded mb-2"
      />
      <Input
        label="Symbol"
        type="text"
        placeholder="Symbol"
        value={newToken.symbol}
        onChange={(e) => setNewToken({ ...newToken, symbol: e.target.value })}
        className="p-2 border rounded mb-2"
      />
      <Input
        label="Decimals"
        type="number"
        placeholder="Decimals"
        value={newToken.decimals}
        onChange={(e) =>
          setNewToken({ ...newToken, decimals: +e.target.value })
        }
        className="p-2 border rounded mb-2"
      />
      <Input
        label="Address"
        type="text"
        placeholder="Address"
        value={newToken.address}
        onChange={(e) => setNewToken({ ...newToken, address: e.target.value })}
        className="p-2 border rounded mb-2"
      />
      <Input
        label="Chain ID (hex)"
        type="number"
        placeholder="Chain ID"
        value={newToken.chainId}
        onChange={(e) => setNewToken({ ...newToken, chainId: +e.target.value })}
        className="p-2 border rounded mb-2"
      />
      <Button onClick={handleAddToken} className="mt-2">
        Add Token
      </Button>
    </div>
  </Modal>
);

export default TokenModal;
