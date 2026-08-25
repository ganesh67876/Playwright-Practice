import { test, expect } from '@playwright/test';

test('CI Demo', async ({ page }) => {
    await page.goto('https://example.com');

    await expect(page).toHaveTitle('Example Domain');
});