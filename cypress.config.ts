import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'fyrmv2',
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
