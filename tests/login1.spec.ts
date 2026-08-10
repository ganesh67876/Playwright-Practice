import { test, expect } from '@playwright/test';

test('CI Login Demo', async ({ page }) => {
    await page.goto('https://stgclickscan.terralogic.com/');
    
    await expect(page.locator("p[class$='styles_signInSubtitle__qCq6i']")).toHaveText('Access your AI document management portal');
});