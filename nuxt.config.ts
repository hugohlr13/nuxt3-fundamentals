// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@nuxt/image",
  ],
  imports: {
    dirs: ["stores"],
  },
  image:{
    domains:["m.media-amazon.com"]
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },
  routeRules:{
    "/spa": { ssr: false},
    "/static": { static: true},
    "/swr": { swr: true},
  }
});
