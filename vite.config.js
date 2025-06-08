import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/To-Do-List/', // Sesuai dengan nama repository GitHub
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist'
  }
})
