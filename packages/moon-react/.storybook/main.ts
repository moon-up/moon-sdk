import type { StorybookConfig } from "@storybook/react-webpack5";
const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-webpack5-compiler-swc",
		"@storybook/addon-onboarding",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
		"@storybook/test-runner",
	],
	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},

	webpackFinal: async (config) => {
		if (config.resolve) {
			config.resolve.alias = {
				...config.resolve.alias,
				"@ethersproject/bignumber": toPath(
					"node_modules/@ethersproject/bignumber",
				),
				"@emotion/core": toPath("node_modules/@emotion/react"),
				"@emotion/styled": toPath("node_modules/@emotion/styled"),
				"emotion-theming": toPath("node_modules/@emotion/react"),
				timers: toPath("node_modules/timers-browserify"),
				"@": path.resolve(__dirname, "../src"),
				react: toPath("node_modules/react"),
				"react-dom": toPath("node_modules/react-dom"),
				viem: toPath("node_modules/viem"),
				wagmi: toPath("node_modules/wagmi"),
			};
		}
		// Add this section to ensure React is loaded
		if (config.module && config.module.rules) {
			config.module.rules.push({
				test: /\.(js|jsx|ts|tsx)$/,
				use: [
					{
						loader: require.resolve("babel-loader"),
						options: {
							presets: [
								require.resolve("@babel/preset-env"),
								require.resolve("@babel/preset-react"),
								require.resolve("@babel/preset-typescript"),
							],
						},
					},
				],
			});
		}
		return config;
	},
};
export default config;
