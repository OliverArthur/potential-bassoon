import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/v2': {
        target: 'https://api.brewerydb.com',
        changeOrigin: true
      }
    }
  },
  plugins: [vue()]
})
