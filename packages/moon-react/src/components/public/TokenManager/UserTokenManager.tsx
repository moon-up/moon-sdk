import React, { useState, useEffect } from "react";
import { UserTokenDBAdapter } from "./Storage";
import {
  TokenListItem as TokenListItemType,
  useCoinGeckoPrices,
  useTokenInfo,
  useTokenList,
} from "@/utils/react-coinghecko";
import TokenListItem from "./components/TokenListItem";
import TokenModal from "./components/TokenModal";
import { UserToken } from "./types";
import { useMoonSDK } from "@/index";
import Button from "@/components/Button/Button";
import { useTokenBalances } from "@/hooks/useTokenBalances";
import { ethers } from "ethers";
import TokenInfoModal from "../TokenInfoModal/TokenInfoModal";
import { useFetchWalletBalances } from "@/hooks/useWalletGasBalances";

type UserTokenManagerProps = {
  dbAdapter: UserTokenDBAdapter;
};

export const UserTokenManager: React.FC<UserTokenManagerProps> = ({
  dbAdapter,
}) => {
  const [tokenInfoModalCGID, setTokenInfoModalCGID] = useState<string>("");
  const { wallet, chains, chain, session } = useMoonSDK();
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
  const [autocompleteOptions, setAutocompleteOptions] = useState<
    TokenListItemType[]
  >([]);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [platforms, setPlatforms] = useState<{ [key: string]: string }>({});
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const [contextMenuOpen, setContextMenuOpen] = useState<string | null>(null);

  const tokenBalanceQueries = useTokenBalances(wallet, tokens);
  const gasBalanceQueries = useFetchWalletBalances(
    [wallet || ""],
    chain?.chain_id?.toString() || "1"
  );
  const { data: tokenPrices } = useCoinGeckoPrices(
    tokens.map((token) => token.coinGeckoId),
    {},
    dbAdapter
  );
  const { data: tokenInfo } = useTokenInfo(newToken.coinGeckoId || "");
  const { data: tokenList } = useTokenList();

  useEffect(() => {
    // dbAdapter
    //   .saveTokenPrice("oath", 0.6)
    //   .then((res) => console.log("tokenPrice", res));
    // dbAdapter
    //   .getTokenPrice("oath")
    //   .then((res) => console.log("tokenPrice", res));
  }, []);

  // console.log(
  //   "tokenPrices",
  //   tokenPrices,
  //   tokenInfo,
  //   tokenList,
  //   tokenBalanceQueries.map((r) => r.data),
  //   tokenBalanceQueries.map((r) => r.error)
  // );

  useEffect(() => {
    (async () => {
      const fetchedTokens = await dbAdapter.getTokens();
      console.log("fetchedTokens", fetchedTokens);
      setTokens(fetchedTokens);
    })();
  }, [dbAdapter, session?.user.id]);

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
    let chain = chains.find((chain) =>
      chain.name?.toLocaleLowerCase().includes(chainName.toLocaleLowerCase())
    );
    console.log("handlePlatformChange", chain, chainName, platforms[chainName]);
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

  //merge balance with token
  let tokensWithBalance = tokens
    .map((token, i) => {
      return {
        ...token,
        balance: tokenBalanceQueries[i]?.data
          ? ethers?.utils.formatUnits(
              tokenBalanceQueries[i]?.data || "0",
              token.decimals
            )
          : "0",
        price: tokenPrices?.[token.coinGeckoId] || 0,
      };
    })
    .sort((a, b) => b.chainId - a.chainId);

  return (
    <div className="p-4">
      {tokens.length === 0 && (
        <p className="ml-auto mr-auto mb-3 text-text-secondary">
          No tokens added yet
        </p>
      )}
      <ul className="mb-3">
        {chain?.native_currency && (
          <TokenListItem
            key={(chain?.native_currency as any).address}
            token={{
              isGasToken: true,
              icon: "https://etherscan.io/images/ethereum-icon.png",
              name: (chain?.native_currency as any).name,
              symbol: (chain?.native_currency as any).symbol,
              coinGeckoId: (chain?.native_currency as any).coinGeckoId,
              decimals: (chain?.native_currency as any).decimals,
              address: "0x",
              chainId: chain?.chain_id || 1,
              balance: gasBalanceQueries[0]?.data
                ? ethers?.utils.formatUnits(
                    gasBalanceQueries[0]?.data || "0",
                    (chain?.native_currency as any).decimals
                  )
                : "0",
              price:
                tokenPrices?.[(chain?.native_currency as any).coinGeckoId] || 0,
            }}
            onDotsClick={() => {}}
            contextMenuOpen={false}
            onRemove={() => {}}
            onSend={() => alert("Send functionality not implemented")}
            onEdit={() => alert("Edit functionality not implemented")}
            onInfo={() => {}}
          />
        )}
        {tokensWithBalance.map((token, i) => (
          <TokenListItem
            key={token.address}
            token={token}
            onDotsClick={() => toggleContextMenu(token.address + token.chainId)}
            contextMenuOpen={contextMenuOpen === token.address + token.chainId}
            onRemove={() => handleRemoveToken(token.address)}
            onSend={() => alert("Send functionality not implemented")}
            onEdit={() => alert("Edit functionality not implemented")}
            onInfo={() => setTokenInfoModalCGID(token.coinGeckoId)}
          />
        ))}
      </ul>
      <Button
        onClick={toggleModal}
        className="btn btn-primary mb-4"
        color="accentColor"
      >
        Add Token
      </Button>
      <TokenInfoModal
        isOpen={!!tokenInfoModalCGID}
        toggleModal={() => setTokenInfoModalCGID("")}
        cgTokenId={tokenInfoModalCGID}
      />
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
