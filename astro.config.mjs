import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://md-shafiq.github.io',
  base: '/data2ai',
  vite: {
    plugins: [tailwindcss()],
  },
});