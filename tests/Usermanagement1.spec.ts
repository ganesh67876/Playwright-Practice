import {test, expect, Locator} from "@playwright/test";

test('Creating Bulk of Users', async({page})=>{

    await page.goto('https://stgclickscan.terralogic.com');

    const username = page.locator('#username')
    await expect(username).toBeVisible()
    await username.fill("SAIGANESH")
    const password = page.locator('#password')
    await expect(password).toBeVisible()
    await password.fill("Ganesh760*#")
    const SignIn = page.locator('[type="submit"]')
    await expect(SignIn).toBeVisible()
    await SignIn.click()
    await page.waitForLoadState('networkidle');
    const Dashboard = page.getByText('Dashboard');
    await expect(Dashboard).toBeVisible({ timeout: 10000 });
    const User = page.locator("//*[contains(text(),'Create New User')]")
    await expect(User).toBeVisible()
    await User.click()
    const Username1 = page.locator('#Username')
    await expect(Username1).toBeVisible()
    await Username1.fill("GS1234")
    await Username1.press('Tab')
    const Email = page.locator("[name='email']")
    await expect(Email).toBeVisible()
    await Email.fill("GS1234@gmail.com")
    const toggle = page.locator('button[role="switch"]')
    await toggle.click()

    await page.locator("//span[normalize-space()='Create User']").click()

    await page.waitForTimeout(5000)
})