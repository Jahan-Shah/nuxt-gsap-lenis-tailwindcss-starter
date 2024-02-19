// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,

  imports: {
    dirs: ['utils']
  },

  modules: ['@nuxtjs/tailwindcss']
})
