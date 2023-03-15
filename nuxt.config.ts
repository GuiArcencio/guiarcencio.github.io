// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Guilherme Arcencio"
        }
    },
    css: ["~/assets/global.scss"],
    modules: [
        "@nuxt/image-edge",
        "nuxt-icon",
    ]
})
