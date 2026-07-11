import { test, expect } from '@playwright/test';

test('pagination table', async ({ page }) => {
    await page.goto('https://stgclickscan.terralogic.com/');

    await page.locator('input[name="username"]').fill('SAIGANESH');
    await page.locator('input[name="password"]').fill('Ganesh760*#');
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle' }),
        page.locator('button[type="submit"]').click(),
    ]);

    const menuToggle = page.locator('//div[contains(@class, "NavBar_role_toggle__qqGuW")]//div[2]');
    await expect(menuToggle).toBeVisible({ timeout: 15000 });
    await menuToggle.click();

    const countyLink = page.locator('text=TOMGREEN_COUNTY_101_TO_105').first();
    await countyLink.waitFor({ state: 'visible', timeout: 15000 });

    await page.waitForSelector('div.ant-modal-wrap', { state: 'hidden', timeout: 15000 }).catch(() => {});
    await countyLink.click({ force: true });

    const dataRowSelector = 'div[class$="ViewList_table_list_folder__gn-OD"] tbody tr:not([aria-hidden="true"]):not(:has-text("No data"))';
    await page.waitForSelector(dataRowSelector, { timeout: 15000 });

    let morerows = true;
    while (morerows) {
        const rows = page.locator(dataRowSelector);
        const rowCount = await rows.count();
        console.log('data rows count:', rowCount);

        for (let i = 0; i < rowCount; i++) {
            const row = rows.nth(i);
            const cells = await row.locator('td').allTextContents();
            console.log(`row ${i + 1}:`, cells.join(' | '));
        }

        const next = page.locator('button[aria-label="Next Page"], button[aria-label="Next page"], button:has-text("Next Page"), svg[css="40"]');
        const nextCount = await next.count();
        if (nextCount === 0) {
            morerows = false;
            break;
        }

        const isDisabled = await next.first().getAttribute('class');
        if (isDisabled?.includes('disabled')) {
            morerows = false;
            break;
        }

        await next.first().click();
        await page.waitForTimeout(3000);
    }

});