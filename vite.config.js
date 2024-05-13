import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
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
