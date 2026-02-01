import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // مهم للنشر على GitHub Pages
  plugins: [react()],
})
