import { formatEther } from 'ethers';
import React from 'react';

export interface TransactionReceiptProps {
  txHash: string;
  from: string;
  to: string;
  value: string;
  gasUsed: string;
  blockNumber: number;
  status: 'success' | 'failure' | 'pending';
  timestamp: number;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  headerProps?: React.HTMLAttributes<HTMLDivElement>;
  contentProps?: React.HTMLAttributes<HTMLDivElement>;
  rowProps?: React.HTMLAttributes<HTMLDivElement>;
  labelProps?: React.HTMLAttributes<HTMLSpanElement>;
  valueProps?: React.HTMLAttributes<HTMLSpanElement>;
  statusProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const TransactionReceipt: React.FC<TransactionReceiptProps> = ({
  txHash,
  from,
  to,
  value,
  gasUsed,
  blockNumber,
  status,
  timestamp,
  containerProps,
  headerProps,
  contentProps,
  rowProps,
  labelProps,
  valueProps,
  statusProps,
}) => {
  const formatAddress = (address: string) =>
    `${address.slice(0, 6)}...${address.slice(-4)}`;

  const formatTimestamp = (timestamp: number) =>
    new Date(timestamp * 1000).toLocaleString();

  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto"
      {...containerProps}
    >
      <div className="text-2xl font-bold mb-4 text-gray-800" {...headerProps}>
        Transaction Receipt
      </div>
      <div className="space-y-3" {...contentProps}>
        <div className="flex justify-between items-center" {...rowProps}>
          <span className="text-gray-600 font-medium" {...labelProps}>
            Status:
          </span>
          <div
            className={`px-3 py-1 rounded-full text-white ${
              status === 'success'
                ? 'bg-green-500'
                : status === 'failure'
                ? 'bg-red-500'
                : 'bg-yellow-500'
            }`}
            {...statusProps}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
        </div>
        <div className="flex justify-between items-center" {...rowProps}>
          <span className="text-gray-600 font-medium" {...labelProps}>
            Transaction Hash:
          </span>
          <span className="text-blue-600 truncate max-w-xs" {...valueProps}>
            {txHash}
          </span>
        </div>
        <div className="flex justify-between items-center" {...rowProps}>
          <span className="text-gray-600 font-medium" {...labelProps}>
            From:
          </span>
          <span className="text-gray-800" {...valueProps}>
            {formatAddress(from)}
          </span>
        </div>
        <div className="flex justify-between items-center" {...rowProps}>
          <span className="text-gray-600 font-medium" {...labelProps}>
            To:
          </span>
          <span className="text-gray-800" {...valueProps}>
            {formatAddress(to)}
          </span>
        </div>
        <div className="flex justify-between items-center" {...rowProps}>
          <span className="text-gray-600 font-medium" {...labelProps}>
            Value:
          </span>
          <span className="text-gray-800" {...valueProps}>
            {formatEther(value)} ETH
          </span>
        </div>
        <div className="flex justify-between items-center" {...rowProps}>
          <span className="text-gray-600 font-medium" {...labelProps}>
            Gas Used:
          </span>
          <span className="text-gray-800" {...valueProps}>
            {gasUsed}
          </span>
        </div>
        <div className="flex justify-between items-center" {...rowProps}>
          <span className="text-gray-600 font-medium" {...labelProps}>
            Block Number:
          </span>
          <span className="text-gray-800" {...valueProps}>
            {blockNumber}
          </span>
        </div>
        <div className="flex justify-between items-center" {...rowProps}>
          <span className="text-gray-600 font-medium" {...labelProps}>
            Timestamp:
          </span>
          <span className="text-gray-800" {...valueProps}>
            {formatTimestamp(timestamp)}
          </span>
        </div>
      </div>
    </div>
  );
};
