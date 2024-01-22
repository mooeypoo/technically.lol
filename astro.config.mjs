import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify"

// https://astro.build/config
export default defineConfig({
  output: "server",// "hybrid",
  adapter: netlify(),
  redirects: {
    '/about': '/'
  }
});