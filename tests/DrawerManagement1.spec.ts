import {test,expect, Locator} from '@playwright/test';

test('Drawer Management',async({page})=>{
        await page.goto('https://stgclickscan.terralogic.com/login')
        await page.getByPlaceholder('Username').fill('SAIGANESH')
        await page.getByPlaceholder('Password').fill('Ganesh760*#')
        await page.getByRole('button', { name: 'Sign in' }).click()
        await expect(page.getByText(/Dashboard/i)).toBeVisible();
        await page.locator("//h6[normalize-space()='Create New Drawer']").click();
        await page.getByPlaceholder('Drawer Name').fill('Ganesh12345');
        await page.locator("//label[@for='fieldName']/following-sibling::input").fill("First_Name");
        
        // Debug: pause to inspect the page structure
        await page.pause();
        await page.locator("//input[contains(@id,'width')]").fill("100");
        await page.getByRole('button', { name: 'Insert Field' }).click();
        await page.getByRole('button', {name:'Save Drawer'}).click();
        await page.waitForTimeout(10000);
    })