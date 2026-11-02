import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://monconseilthermique.fr",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [sitemap({ filter: (page) => !page.includes("/mentions-legales/") && !/\/404(?:\/|\.html)/.test(page) })],
  vite: { plugins: [tailwindcss()] },
});
