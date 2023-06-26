// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'vercel'
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    openaiApiKey: ''
  }
})
