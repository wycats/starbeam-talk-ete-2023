import { defineConfig } from "vite";
import type { SlidevPluginOptions } from "./node_modules/@slidev/cli/dist/index.js";
import type MarkdownIt from "markdown-it";
import attrs from "markdown-it-attrs";

export default defineConfig({
  slidev: {
    vue: {
      /* vue options */
    },
    markdown: {
      /* markdown-it options */
      markdownItSetup(md: MarkdownIt) {
        /* custom markdown-it plugins */
        md.use(attrs);
      },
    },
    /* options for other plugins */
  },
});

// extend vite.config.ts
declare module "vite" {
  interface UserConfig {
    /**
     * Custom internal plugin options for Slidev (advanced)
     *
     * @see https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/options.ts#L50
     */
    slidev?: SlidevPluginOptions;
  }
}
