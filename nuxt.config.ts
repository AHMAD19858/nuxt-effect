// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:[
        '@vueuse/nuxt',
        'nuxt-headlessui',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@pinia/nuxt',
    ],
    pinia: {
      autoImports: [
        // automatically imports `defineStore`
        'defineStore', // import { defineStore } from 'pinia'
        'storeToRefs',// import { storeToRef } from 'pinia'
        ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      ],
    },
    app: {
        head: {
          title: 'Nuxt effect',
        },
    },
    googleFonts: {
        families: {
            Montserrat: [100,200,300,400,500,600,700,800,900]
        }
    },
    headlessui: {
        prefix: 'Headless'
    },
    tailwindcss: {
    cssPath: '~/assets/scss/tailwind.scss',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: process.env.API_BASE_URL,
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: process.env.API_BASE_URL
    }
  },
})
