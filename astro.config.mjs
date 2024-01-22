import { defineConfig } from 'astro/config';

// import netlify from "@astrojs/netlify"

// https://astro.build/config
export default defineConfig({
  // output: "hybrid",
  // adapter: netlify(), <-- this doesn't work for Netlify Forms :(
  redirects: {
    '/about': '/'
  }
});