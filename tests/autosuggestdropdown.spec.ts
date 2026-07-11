import { test, expect } from '@playwright/test';

test('autosuggest dropdown', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');

    await page.locator("input[name='q']").first().fill("smart");

    await page.waitForTimeout(5000);
    const usernameInput = await page.locator('ul>li').allTextContents();
    console.log(usernameInput);

    await page.waitForTimeout(3000);

});