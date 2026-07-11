import{test,expect} from "@playwright/test";

test("User Management",async({page})=>{
     await page.goto("https://clickscan.terralogic.com/user-management");
     
     await page.locator("//input[contains(@name,'username')]").fill("Gysg");
await page.locator("//input[contains(@name,'password')]").fill("Sai123*#");
await page.locator("//button[contains(text(),'Sign in')]").click();

await expect(page.getByText(/Dashboard/i)).toBeVisible();

await page.locator("//h6[contains(text(),'Create New User')]").click();

await page.locator("//input[contains(@id,'Username')]").fill("Gysg1");
await page.locator("//input[contains(@id,'Email')]").fill("Gysg@gmail.com");

await page.getByRole('button', { name: 'Create User' }).click();
});