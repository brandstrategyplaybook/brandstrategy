import { repositoryName, apiEndpoint } from './slicemachine.config.json';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: true,
  nitro: {
    preset: 'netlify'
  },

  app: {
    head: {
      title: 'Prismic + Nuxt Minimal Starter',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/prismic',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@vee-validate/nuxt',
    'nuxt-gtag',
  ],

  colorMode: {
    preference: 'system',   // default on first visit
    fallback: 'dark',
    classSuffix: ''        // <html class="light"> or <html class="dark">
  },

  fonts: {
    families: [
      {
        name: 'Poppins',
        provider: 'google',
        weights: [400, 500, 700, 800, 900], // explicitly load the bold weights you need
      },
      {
        name: 'Inter',
        provider: 'google',
        weights: [400, 500, 700, 800, 900],
      }
    ]
  },

  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: './app/assets/icons',
      icons: {
        'guided-prompts': { body: '<path fill="currentColor .../>' },
      }
    }]
  },

  prismic: {
    endpoint: apiEndpoint || repositoryName,
    preview: '/api/preview',
    clientConfig: {
      routes: [
        {
          type: 'page',
          path: '/:uid',
        },
        {
          type: 'page',
          uid: 'home',
          path: '/',
        },
      ]
    }
  },

  // GA4
  gtag: {
    initMode: 'manual', 
    enabled: true,            // don't load gtag.js until we say so
    id: process.env.NUXT_PUBLIC_GTAG_ID,
    initCommands: [
      // Consent Mode v2 defaults (deny until user grants)
      ['consent', 'default', {
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        ad_storage: 'denied',
        analytics_storage: 'denied',
        wait_for_update: 500,
      }],
    ],
  },

  compatibilityDate: '2025-07-16',
})