/// <reference types="vitest" />

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const config = defineConfig({
  plugins: [dts({ rollupTypes: true })],
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: ['node_modules', 'dist', '.git', '.cache'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
    },
  },
})

export default config
