import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  optimizeDeps: {
    include: ['**/*.docx'],
    exclude: [],
    // add MIME types for specific file extensions
    fileExtensions: {
      '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    },
  },
});
