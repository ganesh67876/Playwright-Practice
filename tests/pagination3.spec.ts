import { test, expect } from '@playwright/test';

test('Create New Drawer button', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://demo.opencart.com/en-gb/catalog/desktops/desktops?page=2', {
        timeout: 60000,
        waitUntil: 'domcontentloaded',
    });

    const paginationCount = await page.locator('ul.pagination li').count();
    console.log('pagination li count:', paginationCount);

        // detect pagination if present
        const paginationItems = page.locator('ul.pagination li');
        let totalPages = 1;
        if (paginationCount > 0) {
            // prefer numeric page links (exclude Prev/Next)
            const numericLinks = page.locator('ul.pagination li >> a:not(:has-text("Prev")):not(:has-text("Next"))');
            const numericCount = await numericLinks.count();
            totalPages = numericCount > 0 ? numericCount : paginationCount;
        } else {
            // fallback: parse summary text like "Showing 1 to 10 of 15"
            const summary =
                (await page.locator('div.col-sm-6.text-right').first().innerText().catch(() => '')) ||
                (await page.locator('p:has-text("Showing")').first().innerText().catch(() => ''));
            const m = summary.match(/Showing\s*(\d+)\s*to\s*(\d+)\s*of\s*(\d+)/i);
            if (m) {
                const from = Number(m[1]);
                const to = Number(m[2]);
                const total = Number(m[3]);
                const perPage = Math.max(1, to - from + 1);
                totalPages = Math.ceil(total / perPage);
            }
        }

        console.log('totalPages:', totalPages);

        const hasPagination = (await paginationItems.count()) > 0;

        for (let p = 1; p <= totalPages; p++) {
            if (hasPagination) {
                // click the numeric page link inside the pagination
                await page.locator(`ul.pagination li:has-text("${p}")`).first().click();
            } else if (p > 1) {
                // try Next button if numeric links not present
                const next = page.locator("//a[normalize-space()='>']").first();
                if ((await next.count()) === 0) break;
                const cls = await next.getAttribute('class');
                if (cls?.includes('disabled')) break;
                await next.click();
            }

            await page.waitForLoadState('domcontentloaded');
            await page.waitForTimeout(250);

            // gather rows from product-list or product table
            const rows = page.locator('div#product-list table tbody tr, table#productTable tbody tr');
            const rowCount = await rows.count();
            console.log(`page ${p} rows:`, rowCount);
            for (let i = 0; i < rowCount; i++) {
                console.log(await rows.nth(i).innerText());
            }
        }
});
