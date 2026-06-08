import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://onethree-twoeight.pages.dev',
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  }
});
