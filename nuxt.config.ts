// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['github-markdown-css/github-markdown-dark.css'],
  content: {
    markdown: {},
    // documentDriven: true,
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-dark',
      // // OR
      // theme: {
      //   // Default theme (same as single string)
      //   default: 'github-light',
      //   // Theme used if `html.dark`
      //   dark: 'github-dark',
      //   // Theme used if `html.sepia`
      //   sepia: 'monokai'
      // }
    },
    experimental: {
      search: {},
    },
  },
  modules: [
    '@nuxt/content',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  nitro: {
    preset: 'github-pages',
    // prerender: { crawlLinks: true, routes: ['/about'] },
  },
  // experimental: {
  //   sharedPrerenderData: true,
  // },
  // routeRules: {
  //   '/**': { prerender: true },
  // },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  // hooks: {
  //   'prerender:routes'({ routes }) {
  //     console.log(routes);
  //     routes.clear(); // Do not generate any routes (except the defaults)
  //   },
  // },
});
