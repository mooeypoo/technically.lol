// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Moriel Schottlender : Technically Funny'
    }
  },
  seo: {
    meta: {
      description: 'Moriel Schottlender is a software engineer, comedian, and writer. She is passionate about making technology more accessible and inclusive.',
      author: 'Moriel Schottlender',
      applicationName: 'Technically Funny',
      ogSiteName: 'Moriel Schottlender: Technically Funny',
      ogLocale: 'en_US',
      ogType: 'website',
      ogUrl: 'https://technically.lol',
      ogTitle: 'Moriel Schottlender: Technically Funny',
      ogImage: 'https://technically.lil/moriel-comedy.png',
      robots: 'index, follow',
    }
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@nuxt/content',
    '@nuxtjs/seo',
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  }
})
