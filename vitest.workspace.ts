import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineWorkspace } from "vitest/config";

import { storybookTest } from "@storybook/experimental-addon-test/vitest-plugin";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default defineWorkspace([
  // 기본 테스트 설정
  {
    test: {
      name: "design-system-lab",
      environment: "happy-dom",
      globals: true,
      setupFiles: ["./src/components/test-utils/setup.ts"],
      environmentOptions: {
        happyDOM: {
          settings: {
            navigator: {
              userAgent: "happy-dom",
            },
          },
        },
      },
    },
  },
  // 스토리북 테스트 설정
  {
    extends: "./vitest.config.ts",
    plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/writing-tests/test-addon#storybooktest
      storybookTest({ configDir: path.join(dirname, ".storybook") }),
    ],
    test: {
      name: "storybook",
      browser: {
        enabled: true,
        headless: true,
        name: "chromium",
        provider: "playwright",
      },
      setupFiles: [".storybook/vitest.setup.ts"],
    },
  },
]);
