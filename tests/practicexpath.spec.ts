// Relative path in Xpath

import {test,expect,Locator} from '@playwright/test';
    test("Verify Xpath Locators", async({page})=>{
    await page.goto("https://clickscan.terralogic.com/login");

    /* const username:Locator= page.locator("//input[@name='username']");
    await expect(username).toBeVisible();
    const password:Locator= page.locator("//input[@name='password']");
    await expect(password).toBeVisible();
    const loginButton:Locator= page.locator("//button[@type='submit']");
    await expect(loginButton).toBeVisible(); */

    /* await page.getByLabel("Username").fill('Gysg');
    await page.getByLabel("Password").fill('Sai123*#');
    await page.getByRole("button", { name: 'Sign in' }).click();
    await expect(page.getByText(/Dashboard/i)).toBeVisible();
    await expect(page.getByText(/Create New Drawer/i)).toBeVisible();
    await page.getByRole("heading", { name: 'Create New Drawer'}).click();
    await page.locator("//input[@id='drawerName']").fill("Test Drawer");
    await page.locator("//input[@id='fieldName']").fill("First_Name");
    await page.locator("//input[@id='width']").fill("100");
    await page.locator("//button[contains(@class,'btn-blue') and text()='Save Drawer']").click(); */

    /* await page.locator("(//input[contains(@class,'form-control')])[1]").fill("Value1");
    await page.waitForTimeout(50000); */

    await page.locator("//input[start-with(@id,'/Gysg')]").fill("Gysg");
    await page.locator("//input[contains(@id,'password')]").fill("Sai123*#");
    await page.locator("//button[contains(@class,'btn') and text()='Sign in']").click();
    await expect(page.getByText(/Dashboard/i)).toBeVisible();
    await page.locator("//h6[contains(text(),'Create New Drawer')]").click();
    await page.locator("//input[contains(@id,'drawerName')]").fill("GYSG1");
    await page.locator("//label[@for='fieldName']/following-sibling::input").fill("First_Name");
    await page.locator("//input[contains(@id,'width')]").fill("100");
    await page.locator("//button[contains(@class,'IndexFieldForm_insert_btn_full__gNlOL')]//following-sibling::btn-blue").click();
    await page.getByRole('button', { name: 'Save Drawer' }).click();
    await page.waitForTimeout(70000);

    //button[contains(@class,'IndexFieldForm_insert_btn_full__gNlOL')]//following-sibling::btn-blue
}); 