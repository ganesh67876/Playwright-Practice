import {test, expect, Locator} from "@playwright/test"

test('Mouse Hover', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Mouse Hover

    const mouse = await page.locator('[class="dropbtn"]')

    await mouse.hover()

    const Mobiles =  page.locator("//a[contains(normalize-space(),'Mobiles')]")

    await Mobiles.hover()

    await page.waitForTimeout(5000)


})

// Right Click

test('Right Click', async({page}) => {
     await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

     const button = page.locator('//span[@class="context-menu-one btn btn-neutral"]')
     await button.click({button:'right'})

     await page.waitForTimeout(5000);
})

//double click

test('double click', async({page}) => {
    
    await page.goto('https://demoqa.com/buttons')

    const double = page.locator("//button[contains(@id,'doubleClickBtn')]")

    await double.dblclick()

    const verify = page.locator("//p[@id='doubleClickMessage']")

    expect(verify).toContainText("You have done a double click")
})


test.only('Drag and Drop', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const source = page.locator('//p[text()="Drag me to my target"]')

    const destination = page.locator('//p[text()="Drop here"]')

    await source.dragTo(destination)



})

