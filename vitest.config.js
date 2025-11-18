import { defineConfig } from 'vitest/config'
import path from 'node:path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
  },
   resolve: {
    alias: {
      Assets: path.resolve(__dirname, 'src/assets'),
    },
  },
})
