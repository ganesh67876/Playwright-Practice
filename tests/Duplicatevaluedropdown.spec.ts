import {test, expect} from '@playwright/test';

test("duplicate value dropdown", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const count = await page.locator("#colors>option")

    const optionTexts:string[]= (await count.allTextContents()).map(text=>text.trim())

    const mySet = new Set<string>()
    const duplicateValues:string[] = []

    for(const text of optionTexts){
        if(mySet.has(text)){
            duplicateValues.push(text)
        }
        else{
            mySet.add(text)
        }   

    }

    console.log("duplicate values:", duplicateValues)
    console.log("all values:", optionTexts) // to check duplicate values in dropdown




})