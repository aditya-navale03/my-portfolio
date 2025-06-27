import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { componentTagger } from 'lovable-tagger'

const mode = process.env.NODE_ENV;

export default defineConfig({
  base: '/my-portfolio/',  // ✅ this must match your GitHub repo name exactly
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
    },
  },
})
