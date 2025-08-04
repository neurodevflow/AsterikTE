import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Performance-optimized Vite configuration
export default defineConfig({
  plugins: [react()],
  
  // Optimized build configuration
  build: {
    // Generate sourcemaps for debugging but exclude from production bundle
    sourcemap: false,
    
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React and major dependencies
          vendor: ['react', 'react-dom', 'wouter'],
          
          // UI components chunk
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          
          // Charts and data visualization
          charts: ['recharts'],
          
          // Query and state management
          query: ['@tanstack/react-query']
        },
        
        // Optimize chunk naming for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    
    // Minification settings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      },
      format: {
        comments: false // Remove comments
      }
    },
    
    // Optimize bundle size
    target: 'es2020',
    cssCodeSplit: true,
    
    // Chunk size warnings
    chunkSizeWarningLimit: 1000
  },
  
  // Development server optimizations
  server: {
    host: '0.0.0.0',
    port: 5173,
    hmr: {
      overlay: false // Disable error overlay for better performance
    }
  },
  
  // Resolve optimizations
  resolve: {
    alias: {
      '@': resolve(__dirname, './client/src'),
      '@shared': resolve(__dirname, './shared'),
      '@assets': resolve(__dirname, './client/public/assets')
    }
  },
  
  // Dependency optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'wouter',
      '@tanstack/react-query',
      'recharts'
    ],
    exclude: ['@vite/client', '@vite/env']
  },
  
  // CSS optimization
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./client/src/styles/variables.scss";`
      }
    }
  },
  
  // Asset optimization
  assetsInclude: ['**/*.woff2', '**/*.woff'],
  
  // Environment variables
  envPrefix: 'VITE_'
});