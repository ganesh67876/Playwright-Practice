import {test, expect, Locator} from "@playwright/test"

test('scroling', async({page})=>{
     await page.goto('https://testautomationpractice.blogspot.com/')

     const ganesh = page.locator("//h2[normalize-space()='Drag and Drop']")

     await ganesh.scrollIntoViewIfNeeded()

     expect(ganesh).toBeVisible()


})

test.only('mouse', async({page})=>{

     await page.goto('https://testautomationpractice.blogspot.com/')

     await page.mouse.wheel(0,2000)

     await page.mouse.wheel(0,-1000)
     const ganesh = page.locator('#datepicker')
     await expect(ganesh).toBeVisible()
})
