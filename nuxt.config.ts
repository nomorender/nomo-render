// https://nuxt.com/docs/api/configuration/nuxt-config
import { createClient } from '@supabase/supabase-js'
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
        disallow: ['/dashboard/**', '/login']
      }
    ],
    sitemap: 'https://www.nomorender.com/sitemap.xml'
  },
  sitemap: {
    minify: true,
    exclude: ['/dashboard/**', '/dashboard', '/login'],
    defaults: {
      changefreq: 'weekly',
      priority: 0.8
    },

    async urls() {
      const supabase = createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_KEY || '', { auth: { persistSession: false } })
      const { data, error } = await supabase
        .from('blog')
        .select('slug, updated_at')
      if (error) throw error
      return data.map(p => ({
        loc: `/inspire/${p.slug}`,
        lastmod: new Date(p.updated_at).toISOString()
      }))
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
    id: process.env.GTAG_ID || 'G-MCVXL28GQP'
  },
  gtm: {
    id: process.env.GTM_ID || 'GTM-MBWC5Q6X',
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt']
    }
  },
  plugins: [{ src: '~/plugins/google-recaptcha.ts' }, { src: '~/plugins/clarity.client.ts', mode: 'client' }],
})