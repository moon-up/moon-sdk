import { useMoonTransaction } from "@/hooks/useMoonAccounts";
import React, { useState } from "react";

type TransactionFormProps = {
  formProps?: React.FormHTMLAttributes<HTMLFormElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

export const TransactionForm: React.FC<TransactionFormProps> = ({
  formProps,
  inputProps,
  buttonProps,
}) => {
  const [to, setTo] = useState("");
  const [value, setValue] = useState("");
  const { sendTransaction } = useMoonTransaction();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendTransaction({ to, value });
  };

  return (
    <form onSubmit={handleSubmit} {...formProps}>
      <input
        type="text"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        placeholder="To Address"
        {...inputProps}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Amount"
        {...inputProps}
      />
      <button type="submit" {...buttonProps}>
        Send Transaction
      </button>
    </form>
  );
};
