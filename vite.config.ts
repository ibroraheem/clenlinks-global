import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          supabase: ['@supabase/supabase-js']
        }
      }
    },
    sourcemap: false,
    minify: 'terser',
    outDir: 'dist',
    target: 'es2015'
  },
  server: {
    port: 3000,
    strictPort: true
  },
  publicDir: 'public'
});
