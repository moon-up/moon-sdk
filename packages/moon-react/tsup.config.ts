import autoprefixer from "autoprefixer";
import fs from "fs/promises";
import path from "path";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import { defineConfig } from "tsup";

export default defineConfig({
	entry: [
		"src/index.ts",
		"!src/**/*.spec.*",
		"!src/**/*.test.*",
		"!src/**/*.stories.*",
	],
	format: ["cjs", "esm"],
	dts: true,
	splitting: false,
	sourcemap: true,
	clean: true,
	outDir: "dist",
	target: "es2020",
	external: ["react", "react-dom", "wagmi", "viem"],
	outExtension({ format }) {
		return {
			js: format === "cjs" ? `.cjs` : `.mjs`,
		};
	},
	esbuildOptions(options) {
		options.assetNames = "assets/[name]-[hash]";
		options.loader = {
			...options.loader,
			".svg": "file",
			".png": "file",
		};
	},
	async onSuccess() {
		// Process CSS with PostCSS and Tailwind
		const css = await fs.readFile(path.resolve("src/index.css"), "utf-8");
		const result = await postcss([tailwindcss, autoprefixer]).process(css, {
			from: "src/index.css",
			to: "dist/index.css",
		});

		await fs.writeFile(path.resolve("dist/index.css"), result.css);
		if (result.map) {
			await fs.writeFile(
				path.resolve("dist/index.css.map"),
				result.map.toString(),
			);
		}
	},
});
