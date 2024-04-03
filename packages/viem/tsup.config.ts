import { defineConfig } from 'tsup';

export default defineConfig({
  target: 'es2020',
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  minify: true,
  cjsInterop: true,
  entryPoints: ['src'],
});
