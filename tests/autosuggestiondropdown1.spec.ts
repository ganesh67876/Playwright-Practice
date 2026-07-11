import {test, expect, Locator} from '@playwright/test';

test('Hidden Bootstrap Dropdown', async ({ page }) => {
   
    await page.goto('https://www.flipkart.com/')

    await page.locator('//input[@name="q"]').first().fill("smart");

    await page.waitForTimeout(5000);

    const searchlist = await page.locator('ul li').allTextContents()
    console.log(searchlist)

    const counts = searchlist.length
    console.log(counts)


})