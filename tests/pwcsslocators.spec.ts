import {test,expect} from '@playwright/test';

test("Verify Css Locators", async({page})=>{
    await page.goto("https://clickscan.terralogic.com/login"); 

    await page.getByLabel("Username").fill("Gysg");
    await page.getByLabel("Password").fill("Sai123*#");
    await page.getByRole("button", { name: 'Sign in' }).click();
    await expect(page.getByText(/Dashboard/i)).toBeVisible();
    await expect(page.getByText(/Create New Drawer/i)).toBeVisible();
    await page.getByRole("heading", { name: 'Create New Drawer'}).click();
    // await page.locator("#drawerName").fill("Test Drawer");
    await page.locator('input[name="description"]').fill("Test Drawer");

    await page.waitForTimeout(5000);

    /* To find the css locator vis Relative path 
       for id ===> p#id
       for class ===> p.class or p[class=NavBar_pill_name__rqYJI]
       there are three types of css locators in relative Path
          1) using '^' symbol
             p[class^=NavBar] ===> it will represent the elements with a class attribute that starts with "NavBar" 
          2) using '$' symbol
             p[class$=NavBar] ===> it will represent the elements with a class attribute that ends with "NavBar" 
          3) using '*' symbol
             p[class*=NavBar] ===> it will represent the elements with a class attribute that contains "NavBar" 
             
        Accessing the multiple css attributes
        
          ex:p[class*="NavBar"][class*="pill"]
          
        if any one of the locator is doesn't matching then we can use the 'not' method
        
          ex:p[class*="NavBar"]:not([class*="pill"])
          
        if both are not matching 
        
          ex:p:not([class*="NavBar"]):not([class*="pill"])*/
        
    



})      