import { test, expect } from '@playwright/test';

test('Create New Drawer button', async ({ page }) => {
    await page.goto('https://stgclickscan.terralogic.com/login');

    await page.locator('input[name="username"]').fill('SAIGANESH');
    await page.locator('input[name="password"]').fill('Ganesh760*#');
    await page.locator('button[type="submit"]').click();

    await page.getByText('Create New Drawer').click();

    const select = page.locator('.ant-select').filter({ has: page.locator('input[aria-label="Default select example"]') }).first();
    await expect(select).toBeVisible();
    await select.click();

    const dropdown = page.locator('.ant-select-dropdown').first();
    await expect(dropdown).toBeVisible();

    const options = dropdown.locator('.ant-select-item-option .ant-select-item-option-content');
    const allOptions = await options.allTextContents();
    console.log(allOptions);

    expect(allOptions).toEqual(expect.arrayContaining(['Text', 'Number']));

    await page.waitForTimeout(3000);
});