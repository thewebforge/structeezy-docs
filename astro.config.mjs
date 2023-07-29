import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// Config partials
import { sidebar } from "./src/config/nav";
import { head } from "./src/config/head";
import { locales } from "./src/config/locales";
import { social } from "./src/config/social";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Structeezy docs",
      logo: {
        light: "~/assets/logos/structeezy-light.svg",
        dark: "~/assets/logos/structeezy-dark.svg",
        replacesTitle: true,
      },
      editLink: {
        baseUrl: "https://github.com/thewebforge/structeezy-docs/edit/main",
      },
      social: social,
      sidebar: sidebar,
      head: head,
      defaultLocale: "root",
      locales: locales,
      lastUpdated: true,
      customCss: [
        "/src/styles/global.css",
        "@fontsource/atkinson-hyperlegible/400.css",
        "@fontsource/atkinson-hyperlegible/700.css",
        "@fontsource/atkinson-hyperlegible/400-italic.css",
        "@fontsource/atkinson-hyperlegible/700-italic.css",
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
