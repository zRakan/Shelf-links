export default defineNuxtConfig({
  modules: ['@element-plus/nuxt', "@nuxt/fonts"],

  elementPlus: {
    themes: ['dark']
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ar'
      },

      link: [
        // iOS images
        { rel: 'apple-touch-icon', sizes: "180x180", href: "/apple-touch-icon.png" },

        // Favicon sizes
        { rel: 'icon', type: "image/png", href: "/favicon-32x32.png" },
        { rel: 'icon', type: "image/png", href: "/favicon-16x16.png" },

        // Android images
        { rel: 'manifest', href: '/site.webmanifest' }
      ],

      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" }, // Viewport

        // SEO properties
          // Google
          { name: "description", content: "اهم الروابط في جامعة الإمام محمد بن سعود الإسلامية، كلية علوم الحاسب والمعلومات، في مكان واحد" },

          // Twitter
          { name: "twitter:card", content: "summary_large_image" },
        
          // Status bar customization
          { name: "theme-color", content: "#FAFCEF" },
          { name: "msapplication-navbutton-color", content: "#FAFCEF" },
          { name: "apple-mobile-web-app-capable", content: "yes" }, // Sets Full-scren
          { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" }, // Sets the style of the status bar

          // Open-graph
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Shelf Team | اهم الروابط في مكان واحد" },
          { property: "og:url", content: "https://shelf.team/"},
          { property: "og:image", content: "https://shelf.team/logo.webp" },
          { property: "og:description", content: "اهم الروابط في جامعة الإمام محمد بن سعود الإسلامية، كلية علوم الحاسب والمعلومات، في مكان واحد" },
          { property: "og:locale", content: "ar_SA" },
          { property: "og:locale:alternate", content: "en_US" },

        { charset: 'utf-8' } // Charset
      ],

      title: "Shelf Team | اهم الروابط في مكان واحد"
    }
  },

  compatibilityDate: "2024-07-23"
})