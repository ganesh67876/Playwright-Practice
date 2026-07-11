/* there are two types of Xpaths 

1) Absolute Xpath
2) Rekative Xpath

Absolute Xpath: 
            It starts with a single forward slash (/) and represents the complete path from 
the root element to the target element. It is not recommended to use absolute Xpath 
as it is fragile and can break if there are any changes in the DOM structure.

Example: /html/body/div[1]/div[2]/div[1]/h1 

Relative Xpath: 
            It starts with a double forward slash (//) and represents the path from any element in the DOM to the target element. It is more flexible and less likely to break if there are changes in the DOM structure.
Example: //h1[@id='heading']
 */


/* Relative X Path

After applying the relative path in the clickscac via below path to llocate the create new drawer // Drawer Name

//input[@id='drawerName'] 

Accessing the element via multiple attributes

//input[@id='drawerName' and @name='description'] 

or we can write outside of the square brackets

//input[@id='drawerName'][@name='description']

and also we have partial means using the or operator

//input[@id='drawerName' or @name='description']  */


/* import { test, expect } from '@playwright/test';

test("Verify Xpath Locators", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");

    const relativepath = page.locator("//input[@id='small-searchterms']")
    await expect(relativepath).toBeVisible();

}) */


/* contains() method in Xpath

contains() method is used to locate elements based on partial matching of attribute values or text content. It is particularly useful when the exact value of an attribute or text is not known, but a portion of it can be identified.

The syntax for using the contains() method in Xpath is as follows:  

//tag[contains(@attribute, 'partial_value')]

or

//tag[contains(text(), 'partial_text')] 
 */
import {test,expect,Locator} from '@playwright/test';

test("Verify Xpath Locators", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");

    /* const computer = page.locator("//h2/a[contains(@href, 'computer')]");
    const computersCount = await computer.count(); */

    /* for (let i = 0; i < computersCount; i++) {
        const text = await computer.nth(i).textContent();
        console.log(text);
    } */

    /* const allproducts = await computer.allTextContents();
    for(let ap in allproducts){
        console.log(ap);
    } */

    /* const computer = page.locator("//h2/a[contains(@href, 'computer')]");
    const computersCount = await computer.count(); */

    //start-with() method in Xpath

    /* const computer =page.locator("//h2/a[starts-with(@href,'/build')]")
    const computersCount = await computer.count();

    console.log("Total Computers: " + computersCount); */

    //test() method in Xpath

    /* const computer = page.locator("//a[text()='Register']")
    const isVisible = await computer.isVisible();

    console.log("Is the Register link visible? " + isVisible); */

    /* const computer = page.locator("//a[.='Register']")
    const isVisible = await computer.isVisible();

    console.log("Is the Register link visible? " + isVisible); */ 

    /* const computer = page.locator("//a[normalize-space()='Register']")
    const isVisible = await computer.isVisible();

    console.log("Is the Register link visible? " + isVisible);  */


    // last() method in Xpath


    /* const last = page.locator("//div[@class='column follow-us']//li[last()]")
    const text = await last.textContent();

    console.log("Last element text: " + text); */

     
    // position() method in Xpath

    const position = page.locator("//div[@class='column follow-us']//li[position()=4]")
    const text = await position.textContent();

    console.log("Position element text: " + text);


})




