import { test, expect, Locator } from '@playwright/test';

test('Static Web Table', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    const item = await page.locator('//div[@class="item-box"]')


    //1) innertext vs textContent

      console.log(await item.nth(2).innerText())
      console.log(await item.nth(2).textContent())
 
      const itemcount = await item.count();
      for (let i = 0; i < itemcount; i++) {
        // example: log each item's innerText
        console.log(await item.nth(i).innerText());
      }

    //2) allInnerText() vs allTextContent()
    
    const products = await item.allInnerTexts()
    console.log(products)

    const products1 = (await item.allTextContents()).map(text=>text.trim())
    console.log(products1)

    await page.waitForTimeout(7000);

    //3) all()

    const productLocators:Locator[] = await item.all();
        console.log(productLocators);

    for (let option of productLocators){
        const pro = await option.nth(2).textContent()
        console.log(pro)
    }

})