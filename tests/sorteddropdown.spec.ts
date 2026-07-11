import {test, expect, Locator} from '@playwright/test'

test("sorting the options in dropdown", async ({page})=>{
      await page.goto("https://testautomationpractice.blogspot.com/")
      
      const dropdownoptions:Locator = page.locator('#colors>option')
      const opentext:string[] = (await dropdownoptions.allTextContents()).map(text=>text.trim());
      const OriginalList:string[] = [...opentext];
      const sortedList:string[] = [...opentext].sort();

      console.log(OriginalList)
      console.log(sortedList)
    
      await expect(OriginalList).toEqual(sortedList);
      await page.waitForTimeout(5000);

      


})


