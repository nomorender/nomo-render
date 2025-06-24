// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY,
      clarityId: process.env.CLARITY_ID
    }
  },
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@nuxtjs/supabase',
    'nuxt-gtag',
    '@zadigetvoltaire/nuxt-gtm',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  site: {
    url: 'https://www.nomorender.com',
    name: 'Nomo Render - 3D Visualization Studio'
  },
  robots: {
    groups: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard/', '/login']
      }
    ],
    sitemap: 'https://www.nomorender.com/sitemap.xml'
  },
  sitemap: {
    minify: true,
    exclude: ['/dashboard/', '/dashboard', '/login'],
    defaults: {
      changefreq: 'monthly',
      priority: 0.8
    }
  },
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
  gtag: {
    id: process.env.GTAG_ID || ''
  },
  gtm: {
    id: process.env.GTM_ID || '',
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt']
    }
  },
  plugins: [{ src: '~/plugins/google-recaptcha.ts' }, { src: '~/plugins/clarity.client.ts', mode: 'client' }],
})