import {test, expect, Locator} from '@playwright/test';

test('Hidden Bootstrap Dropdown', async ({ page }) => {
   
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator('//input[@name="username"]').fill('Admin')
    await page.locator('//input[@name="password"]').fill('admin123')
    await page.locator('//button[@type="submit"]').click()


    await page.getByText('PIM').click()

    await page.locator('form i').nth(2).click();

    const dropdown = page.locator('//div[@role="listbox"]').first();
    await dropdown.waitFor({ state: 'visible' });

    const options = page.locator('//div[@role="listbox"]//span');
    const allOptions = await options.allTextContents();
    console.log(allOptions);




    await page.waitForTimeout(3000)



});