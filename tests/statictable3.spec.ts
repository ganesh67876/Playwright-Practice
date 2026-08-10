import { test } from '@playwright/test';

test('statictable3', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const rows = page.locator('table[name="BookTable"] tbody tr');
  const rowCount = await rows.count();

  for (let i = 0; i < rowCount; i++) {
    const data1 = await rows.nth(i).innerText();
    const auth = await data1.locator("//tr[td[normalize-space()='Mukesh']]").count()
    console.log(auth)
  }

  await page.waitForTimeout(4000);
});