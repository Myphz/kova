import path from "node:path";

import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      "@utils": path.resolve("./src/utils"),
      "@atoms": path.resolve("./src/lib/components/atoms"),
      "@molecules": path.resolve("./src/lib/components/molecules"),
      "@organisms": path.resolve("./src/lib/components/organisms")
    }
  }
};

export default config;
