// Utilities/BaseTest.js
import { test as base, expect as baseExpect } from '@playwright/test';
import PomManager from '../Utilities/PomManager';

export const test = base.extend({
  MyContext: async ({ page }, use) => {
       await use(new PomManager(page));
  }
});

export const expect = baseExpect;
