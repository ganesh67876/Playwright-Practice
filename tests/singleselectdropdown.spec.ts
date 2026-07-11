import {test, expect, Locator} from '@playwright/test'

test("single selection dropdown", async ({page})=>{
      await page.goto("https://testautomationpractice.blogspot.com/")

      // await page.locator("#country").selectOption({value:'uk'})
      // await page.locator("#country").selectOption('India')
      // await page.locator("#country").selectOption({label:'India'})
      // await page.locator("#country").selectOption({index:1})


      const dropdownoptions:Locator = await page.locator('#country>option')

      //await expect(dropdownoptions).toHaveCount(10);

      const allText:string[] = (await dropdownoptions.allTextContents()).map(text=>text.trim());

      console.log(allText)

      expect(allText).toContain('India');


      await page.waitForTimeout(5000);

      // print all the text 

      for(const option in allText){
        console.log(option)
      }

})


