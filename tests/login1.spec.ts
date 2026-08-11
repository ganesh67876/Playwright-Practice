import { test, expect } from '@playwright/test';

test('CI Login Demo', async ({ page }) => {
    await page.goto('https://stgclickscan.terralogic.com/');
    
    const usernameInput = page.getByText("Username")
    await expect(usernameInput).toBeVisible();
});