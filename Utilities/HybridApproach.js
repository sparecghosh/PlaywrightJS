// Utilities/BaseTest.js
import { test as base, expect as baseExpect } from '@playwright/test';
import PomManager from '../Utilities/PomManager';

export const test = base.extend({
  pom: async ({ page }, use) => {
    const pom = new PomManager(page);
    await use(pom);
  }
});

export const expect = baseExpect;
