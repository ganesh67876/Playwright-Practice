import {test, expect} from '@playwright/test';

test("duplicate value dropdown", async ({page})=>{
    await page.goto("https://terralogic.blazeup.ai/login/")
    // this is to check pull request

    await page.getByText('Mobile number or email').fill("saiganesh.g@terralogic.com")
    await page.getByRole('button', { name: 'Proceed' }).click()
    await page.getByLabel('Password').fill("Sai123*#")
    await page.getByRole('button', { name: 'Login' }).click()
    await page.locator("//*[name()='path' and contains(@d,'M12.37 9.1')]").click() 
    await page.locator("//input[contains(@placeholder,'Search by Project Name, customer name')]").fill("Click Scan Web App")
    await page.locator("//span[text()='WITH1-2']").click()      
    await page.getByRole('button', { name: 'New' }).click()   
    await page.getByText("Select Type").click()
    await page.locator("//span[contains(@class,'ui-truncate ui-text-base ui-text-text-800 ui-text-base')][normalize-space()='Bug']").click();
    await page.locator("//input[contains(@placeholder,'Select Label')]").click()
    await page.locator("//span[contains(@class,'ui-truncate ui-text-base ui-text-text-800 ui-text-base')][normalize-space()='Bug']").click();
    await page.getByText("Select Priority").click()
    await page.locator("//span[contains(@class,'ui-truncate ui-text-base ui-text-text-800 ui-text-base')][normalize-space()='Critical']").click();
    await page.locator("//input[contains(@placeholder,'Enter Task Title')]").fill("View Option Not Responding")
    await page.locator("//div[contains(@data-placeholder,'Enter description')]").fill("When I click on view option, it is not responding and not showing any options")
    await page.getByRole('button', { name: 'Create' }).click()
})