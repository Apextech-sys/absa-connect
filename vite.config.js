import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: [],
    }
  },
  optimizeDeps: {
    include: ['react-range']
  },
  server: {
    port: 3000
  },
  base: '/',
  publicDir: 'public'
})