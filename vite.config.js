import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  chunkSizeWarningLimit: 100000,
  plugins: [react()],
})
