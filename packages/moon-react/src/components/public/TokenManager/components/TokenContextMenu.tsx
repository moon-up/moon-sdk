import React, { useEffect, useRef } from "react";

type TokenContextMenuProps = {
  onRemove: () => void;
  onSend: () => void;
  onEdit: () => void;
  onInfo: () => void;
  onClose: () => void;
};

const TokenContextMenu: React.FC<TokenContextMenuProps> = ({
  onRemove,
  onSend,
  onEdit,
  onInfo,
  onClose,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, onClose]);

  return (
    <div
      ref={menuRef}
      className="absolute right-0 top-20 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden"
    >
      <button
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        onClick={onRemove}
      >
        Remove
      </button>
      <button
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        onClick={onSend}
      >
        Send
      </button>
      <button
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        onClick={onEdit}
      >
        Edit
      </button>
      <button
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        onClick={onInfo}
      >
        Info
      </button>
    </div>
  );
};

export default TokenContextMenu;
