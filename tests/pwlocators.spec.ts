import {test,expect, Locator} from "@playwright/test";

/* test("verify playWright locators", async({page})=>{
    await page.goto("https://demo.nopcommerce.com/")

    const logo:Locator = page.getByAltText("Icon for demo.nopcommerce.com")
    await expect(logo).toBeVisible()
})  */

/* test("verify text", async({page})=>{
    await page.goto("https://demo.nopcommerce.com/")

    const text:Locator = page.getByText("Welcome to our store")
    await expect(text).toBeVisible()
}) */


/* test("verify Role", async({page})=>{
    test.setTimeout(200000);
    await page.goto("https://clickscan.terralogic.com/dashboard")
    await page.waitForTimeout(20000);

    await page.getByRole("link", { name: "Admin" }).click()
}) */

/* test("verify Role", async ({ page }) => {
    await page.goto("https://clickscan.terralogic.com/login");
    await page.getByRole("button", { name: "Sign in" }).click();
    await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
}); */


/* test("Login and verify Dashboard", async ({ page }) => {

    // Step 1: Open login page
    await page.goto("https://clickscan.terralogic.com/login");

    // Step 2: Enter credentials
    await page.fill('input[type="text"]', 'GYSG');
    await page.fill('input[type="password"]', 'Sai123*#');

    // Step 3: Click Sign in
    await page.getByRole("button", { name: /sign in/i }).click();

    // Step 4: Wait for navigation (important)
    await page.waitForLoadState('networkidle');

    // Step 5: Verify Dashboard is visible
    await expect(
        page.getByRole("heading", { name: /dashboard/i })
    ).toBeVisible();

}); */

test("verufy login and dashboard", async ({ page }) => {
       await page.goto("https://clickscan.terralogic.com/login");;

       await page.getByLabel("Username").fill("GYSG");
       await page.getByLabel("Password").fill("Sai123*#");
       await page.getByRole("button",{name:'Sign in'}).click();
       await expect(page.getByText(/dashboard/i)).toBeVisible();
       await page.getByRole("heading",{name:"Create New Drawer"}).click();
       await page.getByPlaceholder("Drawer Name").fill("Bailey County");
       await page.getByPlaceholder("Description").fill("Total 170 Books");

})