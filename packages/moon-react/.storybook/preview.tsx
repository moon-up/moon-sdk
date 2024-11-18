import type { Preview } from "@storybook/react";
import React from "react";
import { GlobalStateProvider } from "../src/context";

const preview: Preview = {
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<React.StrictMode>
				<GlobalStateProvider>
					<Story />
				</GlobalStateProvider>
			</React.StrictMode>
		),
	],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			default: "light",
			values: [
				{ name: "light", value: "#f8f8f8" },
				{ name: "dark", value: "#333333" },
			],
		},
	},
};

export default preview;
