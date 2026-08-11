import { test as base, expect } from '@playwright/test';

type MyFixtures = {
    appPage: void;
};

export const test = base.extend<MyFixtures>({
    appPage: async ({ page }, use) => {
        await page.goto('https://testautomationpractice.blogspot.com/');
        await use();
    },
});

export { expect };