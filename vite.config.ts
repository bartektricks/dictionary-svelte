import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    proxy: {
      '/dictionary': {
        target: "https://api.dictionaryapi.dev",
        changeOrigin: true,
        rewrite: path => path.replace(/\/dictionary/, '/api/v2/entries/en'),
      }
    },
  }
})
