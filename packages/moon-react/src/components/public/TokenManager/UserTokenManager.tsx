import React, { useState, useEffect } from "react";
import { UserTokenDBAdapter } from "./Storage";
import {
  TokenListItem as TokenListItemType,
  useCoinGeckoPrices,
  useTokenInfo,
  useTokenList,
} from '@/utils/react-coinghecko';
import TokenListItem from "./components/TokenListItem";
import TokenModal from "./components/TokenModal";
import { UserToken } from "./types";
import { useMoonSDK } from "@/index";
import Button from "@/components/Button/Button";

type UserTokenManagerProps = {
  dbAdapter: UserTokenDBAdapter;
};

export const UserTokenManager: React.FC<UserTokenManagerProps> = ({ dbAdapter }) => {
  const { chains } = useMoonSDK();
  const [cgToken, setCgToken] = useState<string>("");
  const [tokens, setTokens] = useState<UserToken[]>([]);
  const [newToken, setNewToken] = useState<UserToken>({
    name: "",
    symbol: "",
    coinGeckoId: "",
    decimals: 0,
    address: "",
    chainId: 1,
    icon: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [autocompleteOptions, setAutocompleteOptions] = useState<TokenListItemType[]>([]);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [platforms, setPlatforms] = useState<{ [key: string]: string }>({});
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const [contextMenuOpen, setContextMenuOpen] = useState<string | null>(null);

  const { data: tokenPrices } = useCoinGeckoPrices(tokens.map((token) => token.coinGeckoId));
  const { data: tokenInfo } = useTokenInfo(newToken.coinGeckoId || "");
  const { data: tokenList } = useTokenList();
  console.log("tokenPrices", tokenPrices, tokenInfo, tokenList);

  useEffect(() => {
    (async () => {
      const fetchedTokens = await dbAdapter.getTokens();
      setTokens(fetchedTokens);
    })();
  }, [dbAdapter]);

  useEffect(() => {
    if (cgToken && tokenList) {
      const filteredOptions = tokenList.filter((token: TokenListItemType) =>
        token.id.toLowerCase().includes(cgToken.toLowerCase())
      );
      setAutocompleteOptions(filteredOptions);
      setShowAutocomplete(true);
    } else {
      setShowAutocomplete(false);
    }
  }, [cgToken, tokenList]);

  useEffect(() => {
    if (tokenInfo) {
      setNewToken((prevToken) => ({
        ...prevToken,
        name: tokenInfo.name,
        symbol: tokenInfo.symbol,
        icon: tokenInfo.image.small,
        chainId: 1,
        address: Object.values(tokenInfo.platforms)[0],
      }));
      setPlatforms(tokenInfo.platforms);
    }
  }, [tokenInfo]);

  const handleAddToken = async () => {
    await dbAdapter.addToken(newToken);
    setTokens([...tokens, newToken]);
    setNewToken({
      name: "",
      symbol: "",
      coinGeckoId: "",
      decimals: 0,
      address: "",
      chainId: 1,
      icon: "",
    });
    toggleModal();
  };

  const handleRemoveToken = async (address: string) => {
    await dbAdapter.removeToken(address);
    setTokens(tokens.filter((token) => token.address !== address));
    setContextMenuOpen(null);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAutocompleteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCgToken(e.target.value);
  };

  const handleAutocompleteSelect = (token: TokenListItemType) => {
    setNewToken({
      ...newToken,
      coinGeckoId: token.id,
      name: token.name,
      symbol: token.symbol,
    });
    setShowAutocomplete(false);
  };

  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const chainName = e.target.value;
    let chain = chains.find((chain) => chain.name === chainName);
    setNewToken((prevToken) => ({
      ...prevToken,
      chainId: chain?.chain_id || 1,
      address: platforms[chainName],
    }));
    setSelectedPlatform(platforms[chainName]);
  };

  const toggleContextMenu = (address: string) => {
    setContextMenuOpen((prev) => (prev === address ? null : address));
  };

  return (
    <div className="p-4">
      {tokens.length === 0 && <p>No tokens added yet</p>}
      <ul className="mb-3">
        {tokens.map((token) => (
          <TokenListItem
            key={token.address}
            token={token}
            onDotsClick={() => toggleContextMenu(token.address)}
            contextMenuOpen={contextMenuOpen === token.address}
            onRemove={() => handleRemoveToken(token.address)}
            onSend={() => alert("Send functionality not implemented")}
            onEdit={() => alert("Edit functionality not implemented")}
            onInfo={() => alert("Info functionality not implemented")}
          />
        ))}
      </ul>
      <Button onClick={toggleModal} className="btn btn-primary mb-4" color="accentColor">
        Add Token
      </Button>
      <TokenModal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        tokenInfo={tokenInfo}
        cgToken={cgToken}
        setCgToken={setCgToken}
        autocompleteOptions={autocompleteOptions}
        showAutocomplete={showAutocomplete}
        handleAutocompleteChange={handleAutocompleteChange}
        handleAutocompleteSelect={handleAutocompleteSelect}
        platforms={platforms}
        selectedPlatform={selectedPlatform}
        handlePlatformChange={handlePlatformChange}
        newToken={newToken}
        setNewToken={setNewToken}
        handleAddToken={handleAddToken}
      />
    </div>
  );
};

export default UserTokenManager;
