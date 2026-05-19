/// <reference types="vitest" />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';
import tsconfigPaths from 'vite-tsconfig-paths';

const reactRuntimeExternals = [
  'react',
  'react-dom',
  'react/jsx-runtime',
  'react/jsx-dev-runtime',
  'react-dom/client',
];

const externalPackages = [
  ...Object.keys(peerDependencies),
  ...reactRuntimeExternals,
];

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
      entry: { index: './src/index.ts', icons: './src/icons/index.ts' },
      name: 'tajdid-ui',
      fileName: (format, name) => {
        if (format === 'es') {
          return `${name}.es.js`;
        }

        return `${name}.${format}`;
      },
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: (id) =>
        externalPackages.some(
          (pkg) => id === pkg || id.startsWith(`${pkg}/`),
        ),
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [tsconfigPaths(), dts()],
});
