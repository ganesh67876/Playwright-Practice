import { test as base, expect } from '@playwright/test';

type MyFixtures = {
    appPage: void;
};

export const test = base.extend<MyFixtures>({
    appPage: async ({ page }, use) => {
        await page.goto('https://stgclickscan.terralogic.com/login', { waitUntil: 'domcontentloaded', timeout: 60000 });
        await page.locator("input[placeholder='Enter username']").fill('SAIGANESH');
        await page.locator("input[placeholder='Enter password']").fill('Ganesh760*#');
        await page.getByRole('button', { name: 'Sign in' }).click();

        await expect.poll(async () => {
            const url = page.url();
            const bodyText = await page.locator('body').innerText();
            return url.includes('/dashboard') || bodyText.includes('Dashboard');
        }, {
            timeout: 60000,
            intervals: [250, 500, 1000],
        }).toBeTruthy();

        await expect(page.getByText('Dashboard', { exact: true }).first()).toBeVisible({ timeout: 30000 });
        await use();
    },
});

export { expect };