
import { test } from '@playwright/test';

test('statictable3', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const rows = page.locator('table[name="BookTable"] tbody tr');
    const rowCount = await rows.count();

    for (let i = 0; i < rowCount; i++) {
        const row = rows.nth(i);

        const auth = await row.locator("td", {
            hasText: "Mukesh"
        }).count();

        console.log(auth);
    }

    await page.waitForTimeout(4000);
});
