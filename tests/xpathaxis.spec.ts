import { test, expect,Locator } from '@playwright/test';      

// self xpath
   test("Verify child Locators", async({page})=>{
    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    const self:Locator= page.locator("//td[text()='Mexico']/self::td")
    await expect(self).toHaveText('Mexico');

    console.log(await expect(self).toBeVisible())   
});

// parent xpath
test("Verify Parent Locators", async({page})=>{
    await page.goto("https://www.w3schools.com/html/html_tables.asp");  
    const parent:Locator= page.locator("//td[text()='Mexico']/parent::tr")
    await expect(parent).toContainText('Francisco Chang');

    console.log(await expect(parent).toBeVisible())  
});

// ancestor xpath

test("Verify Ancestor Locators", async({page})=>{
    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    const ancestor:Locator= page.locator("//td[text()='Mexico']/ancestor::table")
    await expect(ancestor).toBeVisible();

    console.log(await expect(ancestor).toBeVisible())   
});

// Descendant xpath

test("Verify Descendant Locators", async({page})=>{
    await page.goto("https://clickscan.terralogic.com/drawer-management/create-drawer");

    page.locator("//form[contains(@name,'firstStepFrm')]/descendant::*")  
});

// following xpath

test("Verify Following Locators", async({page})=>{
    await page.goto("https://clickscan.terralogic.com/drawer-management/create-drawer");

    page.locator("//input[contains(@id,'fieldName')]/following::input[contains(@id,'width')]")  
});

// preceding xpath

test("Verify Preceding Locators", async({page})=>{
    await page.goto("https://clickscan.terralogic.com/drawer-management/create-drawer");

    page.locator("//input[contains(@name,'description')]/preceding::input[contains(@id,'drawerName')]")  
});

