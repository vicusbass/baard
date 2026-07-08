// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://baard.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
