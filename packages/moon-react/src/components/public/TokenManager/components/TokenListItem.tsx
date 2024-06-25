import React from "react";
import { IconDots } from "@/assets/icons";
import TokenContextMenu from "./TokenContextMenu";
import { UserToken } from "../types";

type TokenListItemProps = {
  token: UserToken;
  onDotsClick: () => void;
  contextMenuOpen: boolean;
  onRemove: () => void;
  onSend: () => void;
  onEdit: () => void;
  onInfo: () => void;
};

const TokenListItem: React.FC<TokenListItemProps> = ({
  token,
  onDotsClick,
  contextMenuOpen,
  onRemove,
  onSend,
  onEdit,
  onInfo,
}) => (
  <li
    key={token.address}
    className="relative flex mb-2 justify-start py-2 px-3 gap-4 items-center bg-background-primary rounded-sm min-w-[300px] border-2 border-transparent hover:border-2 hover:border-accent-color hover:shadow-lg cursor-pointer"
  >
    <img src={token.icon} alt="Token Icon" className="w-10 h-10" />
    <div className="flex flex-col mr-10 w-[100px]">
      <span className="text-text-primary whitespace-nowrap overflow-hidden text-ellipsis">
        {token.name}
      </span>
      <span className="text-text-secondary">{token.symbol}</span>
    </div>
    <div className="flex flex-col">
      <span className="text-text-primary">0</span>
      <span className="text-text-secondary">$25</span>
    </div>
    <div
      className="flex text-text-primary cursor-pointer w-6 h-6 opacity-50 hover:opacity-100"
      onClick={onDotsClick}
    >
      <IconDots style={{ width: "1.5rem", height: "1.5rem" }} />
    </div>
    {contextMenuOpen && (
      <TokenContextMenu
        onRemove={onRemove}
        onSend={onSend}
        onEdit={onEdit}
        onInfo={onInfo}
        onClose={() => onDotsClick()} // Toggle to close the context menu
      />
    )}
  </li>
);

export default TokenListItem;
