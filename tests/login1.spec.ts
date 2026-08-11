import { test, expect } from '@playwright/test';

test('CI Login Demo', async ({ page }) => {
    await page.goto('https://stgclickscan.terralogic.com/');
    
    await expect(page).toHaveTitle("ClickScan");
});