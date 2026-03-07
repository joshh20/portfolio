import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import { configData } from "./src/assets/configData";

const { SITE_URL } = loadEnv(process.env.NODE_ENV ?? "", process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap()],
  site: SITE_URL ?? configData.metadata.hostname,
});
