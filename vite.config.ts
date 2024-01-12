/// <reference types="vitest" />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
  server: {
    port: 4004,
  },
  build: {
    lib: {
      entry: { '.': './src/index.ts', '/icons': './src/icons/index.ts' }, // Specifies the entry point for building the library.
      name: 'tajdid-ui', // Sets the name of the generated library.
      fileName: format => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ['cjs', 'es'], // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  plugins: [tsconfigPaths(), dts()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
});
