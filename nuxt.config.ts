export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  ssr: false,
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  tailwindcss: {
    exposeConfig: true,
  },
});
