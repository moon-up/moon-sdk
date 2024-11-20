// components/Tooltip.tsx
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import React from "react";

interface TooltipProps {
	content: React.ReactNode;
	children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => (
	<TooltipPrimitive.Root>
		<TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
		<TooltipPrimitive.Content className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade px-2 py-1 rounded-md bg-black text-white shadow-md">
			<TooltipPrimitive.Arrow className="fill-current text-black" />
			{content}
		</TooltipPrimitive.Content>
	</TooltipPrimitive.Root>
);
