import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'motion-src',
  base: '/motion/',
  plugins: [react()],
  build: {
    outDir: '../motion',
    emptyOutDir: true
  }
});
