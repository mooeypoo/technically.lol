// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  site: { url: 'https://technically.lol' },
  app: {
    head: {
      title: 'Moriel Schottlender : Technically Funny',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' },
      ]
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
