import { test } from '@playwright/test';

test("Select dropdown value", async ({ page }) => {

    await page.goto("https://stgclickscan.terralogic.com/drawer-management/create-drawer");

    // Open dropdown
    await page.locator('.ant-select-selector').click();

    // Wait for dropdown options
    await page.locator('.ant-select-dropdown').waitFor();

    // Select option
    await page.getByText('Text').click();

});