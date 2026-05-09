import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// DO NOT REMOTE
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    }
  }
})