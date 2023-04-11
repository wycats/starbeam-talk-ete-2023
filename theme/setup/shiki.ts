/* ./setup/shiki.ts */
import { defineShikiSetup } from "@slidev/types";
import {
  getHighlighter,
  createFocusProcessor,
  defineProcessor,
  addClass,
} from "shiki-processor";
import type { HighlighterOptions } from "shiki";

console.log("HI");

import { createRequire } from "module";
import { createRangeProcessor } from "shiki-processor";
const require = createRequire(import.meta.url);

export default defineShikiSetup(async ({ loadTheme }) => {
  const prefix =
    process.env.NODE_ENV === "development" ? "../" : "slidev-theme-the-unnamed";

  async function highlighter({
    langs,
    themes,
  }: Pick<HighlighterOptions, "langs" | "themes">) {
    return getHighlighter({
      langs: langs,
      themes: themes,
      processors: [createFocusProcessor(), reactProcessor],
    });
  }

  return {
    theme: {
      dark: await loadTheme(
        require.resolve(`${prefix}/public/theme/theunnamed-dark-theme.json`)
      ),
      light: await loadTheme(
        require.resolve(`${prefix}/public/theme/theunnamed-dark-theme.json`)
      ),
    },
    highlighter: highlighter as any,
  };
});

const reactProcessor = defineProcessor({
  name: "react",
  handler: createRangeProcessor({
    react: ["starbeam", "react-preact", "react"],
    preact: ["starbeam", "react-preact", "preact"],
  }),
  postProcess: ({ code }): string | undefined => {
    if (code.match(/class="[^"]*starbeam[^"]*"/))
      return addClass(code, "has-starbeam-lines", "pre");
  },
});
