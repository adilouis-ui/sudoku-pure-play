import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "./", // Relative paths for Apache hosting
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      external: mode === 'production' ? ['eruda'] : [],
      output: {
        format: 'iife',
        name: 'KukuSudoku',
        entryFileNames: 'assets/app.bundle.js',
        chunkFileNames: 'assets/chunk-[name].js',
        assetFileNames: 'assets/[name].[ext]',
        manualChunks: undefined,
        inlineDynamicImports: true, // Force single bundle
      }
    },
    chunkSizeWarningLimit: 1000,
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
}));