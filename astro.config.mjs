import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  redirects: {
    '/': '/lp/rolamentos-industriais/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
