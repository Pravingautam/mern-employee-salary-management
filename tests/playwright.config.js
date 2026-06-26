import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './',
  use: {
    headless: true,
    baseURL: 'http://localhost:3000',
  },
});
