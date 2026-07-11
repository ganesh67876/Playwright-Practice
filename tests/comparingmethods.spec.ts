import { test, expect, Locator } from '@playwright/test';

test('Create New Drawer button', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    const items = await page.locator('.item-box')

    //1) innerText() vs textContent()

    //console.log(await items.nth(2).innerText());
    //console.log(await items.nth(2).textContent());

    //const itemCount = await items.count();
    //for (let i = 0; i < itemCount; i++) {
        //const product:null | string = await items.nth(i).innerText(); 
        //console.log(product?.trim())    // console.log(await option.innerText());
    //}

    //2) allInnerTexts() vs allTextContents()
         /*const Products: string[] = await items.allInnerTexts();
         console.log(Products);
 
        const allProducts: string[] = (await items.allTextContents())
        const trim = allProducts.map(text => text.trim());
        console.log(trim); */

    //3) all()
    
        const productLocators:Locator[] = await items.all();
        console.log(productLocators);

    await page.waitForTimeout(7000);
})