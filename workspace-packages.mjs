const packages = [
  { name: 'config-loader', type: 'js', environment: 'node' },
  { name: 'parse5-utils', type: 'js', environment: 'node' },
  { name: 'browser-logs', type: 'ts', environment: 'node' },
  { name: 'polyfills-loader', type: 'ts', environment: 'node' },
  { name: 'rollup-plugin-html', type: 'ts', environment: 'node' },
  { name: 'rollup-plugin-polyfills-loader', type: 'ts', environment: 'node' },
  { name: 'rollup-plugin-copy', type: 'js', environment: 'node' },
  { name: 'rollup-plugin-workbox', type: 'ts', environment: 'node' },
  { name: 'rollup-plugin-import-meta-assets', type: 'js', environment: 'node' },
  { name: 'dev-server', type: 'ts', environment: 'node' },
  { name: 'dev-server-core', type: 'ts', environment: 'node' },
  { name: 'dev-server-esbuild', type: 'ts', environment: 'node' },
  { name: 'dev-server-hmr', type: 'ts', environment: 'node' },
  { name: 'dev-server-rollup', type: 'ts', environment: 'node' },
  { name: 'dev-server-legacy', type: 'ts', environment: 'node' },
  { name: 'dev-server-import-maps', type: 'ts', environment: 'node' },
  { name: 'test-runner', type: 'ts', environment: 'node' },
  { name: 'test-runner-core', type: 'ts', environment: 'node' },
  { name: 'test-runner-chrome', type: 'ts', environment: 'node' },
  { name: 'test-runner-puppeteer', type: 'ts', environment: 'node' },
  { name: 'test-runner-playwright', type: 'ts', environment: 'node' },
  { name: 'test-runner-selenium', type: 'ts', environment: 'node' },
  { name: 'test-runner-browserstack', type: 'ts', environment: 'node' },
  { name: 'test-runner-coverage-v8', type: 'ts', environment: 'node' },
  { name: 'test-runner-commands', type: 'ts', environment: 'node' },
  { name: 'test-runner-junit-reporter', type: 'ts', environment: 'node' },
  { name: 'test-runner-mocha', type: 'ts', environment: 'browser' },
  { name: 'test-runner-saucelabs', type: 'ts', environment: 'node' },
  { name: 'test-runner-visual-regression', type: 'ts', environment: 'node' },
  { name: 'test-runner-webdriver', type: 'ts', environment: 'node' },
  { name: 'dev-server-storybook', ignoreTsConfig: true },
];

export { packages };
