import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        // Préserver les caractères unicode (emojis)
        unsafe: false,
      },
      format: {
        // Forcer l'encodage ASCII pour éviter les problèmes d'emojis
        ascii_only: false,
        // Préserver les caractères Unicode
        beautify: false,
      },
    },
  },
})
