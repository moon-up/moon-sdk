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
	outExtension({ format }) {
		return {
			js: format === "cjs" ? `.cjs` : `.mjs`,
		};
	},
});
