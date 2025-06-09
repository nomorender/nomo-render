// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@nuxtjs/supabase',
  ],
  supabase: { redirect: false, },
  colorMode: {
    preference: 'light',
  },
  googleFonts: {
    families: {
      Jost: [300, 400, 500, 600, 700],
    },
    display: "swap",
  },
})