import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

// Config partials
import { sidebar } from "./src/config/nav";
import { head } from "./src/config/head";
import { locales } from "./src/config/locales";
import { social } from "./src/config/social";

const site = "https://docs.structeezy.com/";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    starlight({
      title: "Structeezy docs",
      logo: {
        src: "~/assets/logos/structeezy-logotype.svg",
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
      components: {
        // EditLink: './src/components/starlight/EditLink.astro',
        // Head: './src/components/starlight/Head.astro',
        // Hero: './src/components/starlight/Hero.astro',
        // MarkdownContent: './src/components/starlight/MarkdownContent.astro',
        // MobileTableOfContents:
        //   "./src/components/starlight/MobileTableOfContents.astro",
        // TableOfContents: "./src/components/starlight/TableOfContents.astro",
        PageSidebar: "./src/components/starlight/PageSidebar.astro",
        Pagination: "./src/components/starlight/Pagination.astro",
        SiteTitle: "./src/components/starlight/SiteTitle.astro",
        // Search: './src/components/starlight/Search.astro',
        // Sidebar: './src/components/starlight/Sidebar.astro',
        // PageTitle: './src/components/starlight/PageTitle.astro',
      },
    }),
    react(),
  ],
});
