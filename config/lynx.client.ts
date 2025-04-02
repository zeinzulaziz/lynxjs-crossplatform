import { defineConfig } from '@rsbuild/core';

import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    publicDir: [
      {
        name: './build/web',
      },
    ],
  },
  source: {
    entry: {
      index: './client',
    },
  },
  dev: {
    watchFiles: {
      paths: ['./build/web/main.web.bundle'],
      type: 'reload-page',
    },
  },
  output: {
    assetPrefix: '/',
    distPath: {
      root: './build/client',
    },
  },
  html: {
    title: 'LynxJS Web',
    favicon: './src/assets/favicon.ico',
  },
});
