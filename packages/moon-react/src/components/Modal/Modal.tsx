import React from "react";

export type ModalProps = {
  isOpen: boolean;
  toggleModal: (e?:any) => void;
  children: React.ReactNode;
  overlayProps?: React.HTMLAttributes<HTMLDivElement>;
  modalProps?: React.HTMLAttributes<HTMLDivElement>;
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  toggleModal,
  children,
  overlayProps,
  modalProps,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-100 gap-3">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={toggleModal}
        {...overlayProps}
      ></div>
      <div
        className="rounded-lg p-4 z-50 max-w-md w-full bg-background-secondary"
        {...modalProps}
      >
        {children}
      </div>
    </div>
  );
};
