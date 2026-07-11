import {test, expect, Locator} from '@playwright/test'

test("single selection dropdown", async ({page})=>{
      await page.goto("https://testautomationpractice.blogspot.com/")

      // select options from drodown

      // await page.locator("//select[contains(@id,'colors')]").selectOption(['Red','Blue','Green','Yellow','White']) // using visible text
      // await page.locator("//select[contains(@id,'colors')]").selectOption(['red','blue','green']) // using value 
      // await page.locator("//select[contains(@id,'colors')]").selectOption([{label:'Red'},{label:'Green'},{label:'Yellow'}]) // using label 
      await page.locator("//select[contains(@id,'colors')]").selectOption([{index:0},{index:1},{index:2}])

      // check number of options in dropdown

      const count:Locator = page.locator('#colors>option') 
      await expect(count).toHaveCount(7);


      // checking particular option is present in the dropdown

      const optionText:string[] = (await count.allTextContents()).map(text=>text.trim())
      console.log(optionText)

      await expect(optionText).toContain('Red');

      // selecting options using for loop

      for(let op in optionText){
        console.log(op);
      }

      
      await page.waitForTimeout(5000);


})



