import eslintPlugin from "vite-plugin-eslint";
import { quasar } from "@quasar/vite-plugin";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@intlify/nuxt3"],
  typescript: {
    strict: true,
  },
  build: {
    transpile: ["quasar"],
  },
  css: ["~/assets/styles/quasar.sass"],
  vite: {
    plugins: [
      eslintPlugin(),
      quasar({
        sassVariables: "assets/styles/variables.sass",
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;',
        },
      },
    },
  },
});
