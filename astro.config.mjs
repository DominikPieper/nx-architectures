import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const site = "https://dominikpieper.github.io/nx-architectures/";

export default defineConfig({
  site,
  baseUrl: "dominikpieper.github.io/nx-architectures/",
  integrations: [
    starlight({
      title: "Nx Architectures",
      logo: {
        light: "/src/assets/logo.png",
        dark: "/src/assets/logo.png",
        replacesTitle: true,
      },
      favicon: '/src/assets/logo.png',
      editLink: {
        baseUrl: "https://github.com/DominikPieper/nx-architectures/edit/main/",
      },
      social: {
        github: "https://github.com/DominikPieper/nx-architectures",
      },
      head: [
        /*{
          tag: "meta",
          attrs: { property: "og:image", content: site + "og.jpg?v=1" },
        },
        {
          tag: "meta",
          attrs: { property: "twitter:image", content: site + "og.jpg?v=1" },
        },*/
      ],
      customCss: ["./src/styles/custom.css", "./src/assets/landing.css"],
      locales: {
        root: { label: "English", lang: "en" },
      },
      sidebar: [
        {
          label: "Architecture examples",
          autogenerate: { directory: "examples" },
        },
      ],
      lastUpdated: true,
    }),
  ],
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
