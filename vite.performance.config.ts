import { defineConfig } from 'vite';
import { resolve } from 'path';

// Performance-optimized Vite configuration
export const performanceConfig = {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          vendor: ['react', 'react-dom'],
          router: ['wouter'],
          query: ['@tanstack/react-query'],
          ui: ['@radix-ui/react-avatar', '@radix-ui/react-button', '@radix-ui/react-dialog'],
        },
      },
    },
    // Enable minification and compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
    // Reduce bundle size
    cssCodeSplit: true,
    sourcemap: false, // Disable sourcemaps in production for smaller files
    reportCompressedSize: false, // Speed up build
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'wouter',
      '@tanstack/react-query',
    ],
  },
  server: {
    preTransformRequests: false, // Disable pre-transforming for faster dev server
  },
};