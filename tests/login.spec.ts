import {test, expect,Locator} from '@playwright/test';

test("test login page", async({page})=>{
        await page.goto("https://stgclickscan.terralogic.com/login");

        await page.getByLabel("Username").fill("Ganesh9898");
        await page.getByLabel("password").fill("Sai123*#")
        await page.locator("//button[contains(text(),'Sign in')]").click()


        await page.waitForTimeout(50000);
})