import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // root: './',
  // base: '/api',
  // publicDir: 'src',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: '127.0.0.1',
    port: 9999,
    proxy: {
      '/api': 'http://127.0.0.1:3100/'
    }
  }
});
