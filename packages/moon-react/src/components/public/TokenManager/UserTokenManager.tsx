import React from "react";
import TokenListItem from "./components/TokenListItem";
import TokenModal from "./components/TokenModal";
import Button from "@/components/Button/Button";
import TokenInfoModal from "../TokenInfoModal/TokenInfoModal";
import { ethers } from "ethers";
import { useMoonTokenManager } from "@/hooks/useMoonTokenManager";
import { useTokenManagmentUIState } from "./useTokenManagmentUIState";

export const UserTokenManager: React.FC = () => {

  const {
    tokens,
    addToken,
    removeToken,
    tokenList,
    chain,
    gasBalanceQueries,
  } = useMoonTokenManager();

  const {
    tokenInfoModalCGID,
    setTokenInfoModalCGID,
    cgToken,
    newToken,
    setNewToken,
    isModalOpen,
    autocompleteOptions,
    showAutocomplete,
    platforms,
    selectedPlatform,
    contextMenuOpen,
    toggleModal,
    handleAutocompleteChange,
    handleAutocompleteSelect,
    handlePlatformChange,
    toggleContextMenu,
  } = useTokenManagmentUIState(tokenList);

  const handleAddToken = async () => {
    await addToken(newToken);
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
                tokens.find(
                  (t) =>
                    t.coinGeckoId ===
                    (chain?.native_currency as any).coinGeckoId
                )?.price || 0,
            }}
            onDotsClick={() => {}}
            contextMenuOpen={false}
            onRemove={() => {}}
            onSend={() => alert("Send functionality not implemented")}
            onEdit={() => alert("Edit functionality not implemented")}
            onInfo={() => {}}
          />
        )}
        {tokens.map((token) => (
          <TokenListItem
            key={token.address + token.chainId}
            token={token}
            onDotsClick={() => toggleContextMenu(token.address + token.chainId)}
            contextMenuOpen={contextMenuOpen === token.address + token.chainId}
            onRemove={() => removeToken(token.address)}
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
        tokenInfo={newToken}
        cgToken={cgToken}
        setCgToken={(value: string) => handleAutocompleteChange(value)}
        autocompleteOptions={autocompleteOptions}
        showAutocomplete={showAutocomplete}
        handleAutocompleteChange={(e) =>
          handleAutocompleteChange(e.target.value)
        }
        handleAutocompleteSelect={handleAutocompleteSelect}
        platforms={platforms}
        selectedPlatform={selectedPlatform}
        handlePlatformChange={(e) => handlePlatformChange(e.target.value)}
        newToken={newToken}
        setNewToken={setNewToken}
        handleAddToken={handleAddToken}
      />
    </div>
  );
};

export default UserTokenManager;
