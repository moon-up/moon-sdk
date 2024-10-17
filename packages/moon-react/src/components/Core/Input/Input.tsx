// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { useMoonSDK } from "../../../hooks/old/useMoonSDK";

export type InputProps = {
	label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, ...rest }: InputProps) {
	const { authConfig } = useMoonSDK();
	return (
		<div className="w-full">
			{label && (
				<label
					htmlFor={label}
					className="block text-sm font-medium leading-6 text-text-secondary"
				>
					{label}
				</label>
			)}
			<input
				id={label}
				name={label}
				{...rest}
				style={{
					borderRadius: authConfig.appearance.input.borderRadius || "3px",
				}}
				className={`block w-full border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
			/>
		</div>
	);
}
