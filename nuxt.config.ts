import {defineNuxtConfig} from 'nuxt/config'
export default defineNuxtConfig({
   css:["@picocss/pico"],
   nitro: {
      preset: "cloudflare"
   }
})
