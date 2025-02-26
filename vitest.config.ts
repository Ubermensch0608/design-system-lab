import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: ["./src/components/test-utils/setup.ts"],
    environmentOptions: {
      happyDOM: {
        settings: {
          // HappyDOM 설정
          navigator: {
            userAgent: "happy-dom",
          },
        },
      },
    },
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        ".storybook/",
        "**/*.stories.{js,ts,jsx,tsx}",
        "**/*.d.ts",
        "**/*.config.{js,ts}",
        "coverage/**",
        "vitest.workspace.ts",
      ],
    },
  },
});
