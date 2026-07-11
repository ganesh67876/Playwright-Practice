import {test, expect} from '@playwright/test';

test("Verify Drawer Management",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    /* const nameInput = page.locator("//input[contains(@id,'name')]")
    await expect(nameInput).toBeVisible();
    const maxlength = await nameInput.getAttribute("maxlength");
    await expect(maxlength).toBe("15");
    await nameInput.fill("Ganesh Kumar");
    const gg = await nameInput.inputValue();
    await expect(gg).toBe("Ganesh Kumar");
    await page.waitForTimeout(70000); */


    //Radio Buttons

    const radioInput = page.locator("//input[@id='male']");
    await expect(radioInput).toBeVisible();
    await expect(radioInput).toBeEnabled();
    await radioInput.check();
    await expect(radioInput).toBeChecked();
    await page.waitForTimeout(70000);

     

});