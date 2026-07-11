import { test, expect} from '@playwright/test';

test("Verify Drawer Management",async({page})=>{

    await page.goto("https://clickscan.terralogic.com/drawer-management");

    await page.locator("//input[contains(@id,'username')]").fill("Gysg");
    await page.locator("//input[contains(@id,'password')]").fill("Sai123*#");
    await page.locator("//button[contains(@class,'btn') and text()='Sign in']").click();
    await expect(page.getByText(/Dashboard/i)).toBeVisible();
    await page.locator("//h6[contains(text(),'Create New Drawer')]").click();
    await page.locator("//input[contains(@id,'drawerName')]").fill("Ganesh1234");
    await page.locator("//label[@for='fieldName']/following-sibling::input").fill("First_Name");
    await page.locator("//input[contains(@id,'width')]").fill("100");
    await page.getByRole('button', { name: 'Insert Field' }).click();
    const keyReferenceCheckbox = await page.locator("//input[contains(@type,'checkbox')]");
    const count = await keyReferenceCheckbox.count();
    for(let i=0; i<count; i++){
        await keyReferenceCheckbox.nth(i).check();
        await expect(keyReferenceCheckbox.nth(i)).toBeChecked();
    }
    await expect(keyReferenceCheckbox).toBeChecked();
    await page.locator("//label[@for='fieldName']/following-sibling::input").fill("Last_Name");
    await page.locator("//input[contains(@id,'width')]").fill("100");
    await page.getByRole('button', { name: 'Insert Field' }).click();
    await page.locator("//label[@for='fieldName']/following-sibling::input").fill("SSN");
    await page.locator("//input[contains(@id,'width')]").fill("100");
    await page.getByRole('button', { name: 'Insert Field' }).click();
    await page.getByRole('button', { name: 'Save Drawer' }).click();
    await page.waitForTimeout(100000);
   
});