import { repositoryName, apiEndpoint } from './slicemachine.config.json';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

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

  modules: ['@nuxt/eslint', '@nuxtjs/prismic', '@nuxt/fonts', '@nuxt/ui', '@nuxtjs/color-mode'],

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

  compatibilityDate: '2025-07-16',
})