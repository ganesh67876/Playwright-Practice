import {test, expect} from '@playwright/test';
import * as XLSX from 'xlsx'; // ✅ ADDED

test("duplicate value dropdown", async ({page})=>{

    // ✅ ADDED (Excel reading)
    const workbook = XLSX.readFile('C:/Users/SaiGanesh- 3443/Downloads/Bugs Sheet.xlsx');
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const bugs: any[] = XLSX.utils.sheet_to_json(sheet);

    await page.goto("https://terralogic.blazeup.ai/login/")

    await page.getByText('Mobile number or email').fill("saiganesh.g@terralogic.com")
    await page.getByRole('button', { name: 'Proceed' }).click()
    await page.getByLabel('Password').fill("Sai123*#")
    await page.getByRole('button', { name: 'Login' }).click()
    await page.locator("//*[name()='path' and contains(@d,'M12.37 9.1')]").click() 
    await page.locator("//input[contains(@placeholder,'Search by Project Name, customer name')]").fill("Click Scan Web App")
    await page.locator("//span[text()='WITH1-2']").click()      

    // ✅ UPDATED: Loop starts
    for (const bug of bugs) {

        await page.getByRole('button', { name: 'New' }).click()   
        await page.getByText("Select Type").click()
        await page.locator("//span[contains(@class,'ui-truncate ui-text-base ui-text-text-800 ui-text-base')][normalize-space()='Bug']").click();
        await page.locator("//input[contains(@placeholder,'Select Label')]").click()
        await page.locator("//span[contains(@class,'ui-truncate ui-text-base ui-text-text-800 ui-text-base')][normalize-space()='Bug']").click();
        await page.getByText("Select Priority").click()
        await page.locator("//span[contains(@class,'ui-truncate ui-text-base ui-text-text-800 ui-text-base')][normalize-space()='Critical']").click();

        // ✅ UPDATED (dynamic data from Excel)
        await page.locator("//input[contains(@placeholder,'Enter Task Title')]").fill(bug.Title)
        await page.locator("//div[contains(@data-placeholder,'Enter description')]").fill(bug.Description)

        await page.getByRole('button', { name: 'Create' }).click()

        await page.waitForTimeout(2000) // optional
    }

})