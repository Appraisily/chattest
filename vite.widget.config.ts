import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      input: path.resolve(__dirname, './src/widget/index.ts'),
      output: {
        format: 'iife',
        dir: 'dist',
        entryFileNames: 'widget.js',
        assetFileNames: 'widget.css',
        name: 'ChatWidget',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      },
      external: ['react', 'react-dom']
    },
    sourcemap: true,
    minify: 'terser'
  }
});