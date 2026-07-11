import {test,expect} from "@playwright/test";

test("User Management",async({page})=>{
    await page.goto("https://clickscan.terralogic.com/user-management");
    let UserManagementTitle:string= await page.title();
    await expect(page.locator('h1')).toHaveText("User Management");
})