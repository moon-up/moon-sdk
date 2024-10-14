import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src', '!src/**/*.spec.*', '!src/**/*.test.*', '!src/**/*.stories.*'],

  target: 'es2020',
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  minify: true,
  cjsInterop: true,
  external: ['react', 'react-dom'],
});
