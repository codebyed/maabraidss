import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  // No GitHub Pages o site é servido em /maabraidss/ (página de projeto),
  // mas no dev local (npm run dev) fica direto na raiz: http://localhost/.
  base: command === 'build' ? '/maabraidss/' : '/',
  server: {
    port: 80,
    strictPort: true,
  },
  preview: {
    port: 80,
    strictPort: true,
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
}))
