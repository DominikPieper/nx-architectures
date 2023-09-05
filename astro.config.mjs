import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const site = "https://starlight.astro.build/";

export default defineConfig({
  site,
  integrations: [
    starlight({
      title: "Nx Architectures",
      /*logo: {
        light: "/src/assets/logo-light.svg",
        dark: "/src/assets/logo-dark.svg",
        replacesTitle: true,
      },*/
      editLink: {
        baseUrl: "https://github.com/DominikPieper/nx-architectures/edit/main/",
      },
      social: {
        github: "https://github.com/DominikPieper/nx-architectures",
      },
      head: [
        {
          tag: "meta",
          attrs: { property: "og:image", content: site + "og.jpg?v=1" },
        },
        {
          tag: "meta",
          attrs: { property: "twitter:image", content: site + "og.jpg?v=1" },
        },
      ],
      customCss: ["./src/styles/custom.css", "./src/assets/landing.css"],
      locales: {
        root: { label: "English", lang: "en" },
      },
      sidebar: [
        {
          label: "Start Here",
          items: [
            {
              label: "Getting Started",
              link: "getting-started",
            },
          ],
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
      ],
      lastUpdated: true,
    }),
  ],
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
