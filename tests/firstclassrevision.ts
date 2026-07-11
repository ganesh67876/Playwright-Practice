import {test,expect} from "@playwright/test";

test("Verify Google Title",async({page})=>{
     await page.goto('https://www.google.com')

     let title:string= await page.title()
     console.log(title)
     await expect(page).toHaveTitle('Google')
})

test("verify URL", async({page})=>{
     await page.goto('https://example.com')
        let URL:string= await page.url()
        console.log(URL)
     await expect(page).toHaveURL('https://example.com/')
})


