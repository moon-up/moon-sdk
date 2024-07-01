import { ProtocolInfo } from "@/types";
import React from "react";

interface Props {
  message: ProtocolInfo;
}

const ProtocolInfoBubble: React.FC<Props> = ({ message }) => (
  <div>
    <h3 className="font-bold text-lg">{message.name}</h3>
    <p className="mt-2">{message.description}</p>
    <p className="mt-2">TVL: ${message.tvl.toLocaleString()}</p>
    <p>APY: {message.apy}%</p>
  </div>
);

export default ProtocolInfoBubble;
