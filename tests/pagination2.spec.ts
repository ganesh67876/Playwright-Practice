import { test, expect } from '@playwright/test';

test('Create New Drawer button', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/', {
  timeout: 60000,
  waitUntil: 'domcontentloaded',
});

    await page.waitForTimeout(3000)

    const paginationItems = page.locator('ul.pagination li');
    const pageCount = await paginationItems.count();
    console.log('pagination pages:', pageCount);

    for (let index = 0; index < pageCount; index++) {
        const pageItem = paginationItems.nth(index);
        const pageLabel = (await pageItem.innerText()).trim();

        await pageItem.click();
        await page.waitForTimeout(1000);

        const smartphoneRow = page.locator('table[id="productTable"] tbody tr:has-text("Smartphone")');
        if (await smartphoneRow.count() > 0) {
            const cells = await smartphoneRow.locator('td').allInnerTexts();
            console.log(`page ${pageLabel} smartphone:`, cells.join(' | '));
        } else {
            console.log(`page ${pageLabel} has no smartphone row`);
        }
    }

})
