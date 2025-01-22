import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: './', // Make assets load correctly on GitHub Pages
  build: {
    assetsInlineLimit: 0, // Disable inlining assets
    rollupOptions: {
      output: {
        manualChunks: undefined // Disable chunk splitting
      }
    }
  }
});
