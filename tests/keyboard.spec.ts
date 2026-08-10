import {test, expect, Locator} from "@playwright/test"

test('Keyboard Actions', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const name = page.locator("input[id='name']")

    await name.fill("SaiGanesh")

    await page.keyboard.press("Enter")
})



test('Keyboard', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const name = page.locator("input[id='name']")
    await name.fill("SaiGanesh")
    await name.press("Tab") 
    const mail = page.locator("input[id='email']")
    await expect(mail).toBeFocused()
})

test('Keyboard1', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/key_presses')

    const name = page.locator('#target')

    await name.click() 

    await name.press("ArrowDown")  

    const message = page.locator('#result')

    await expect(message).toHaveText("You entered: DOWN")

})

test('Keyboard Actions4', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const name = page.locator('#name') 
    await name.fill("SaiGanesh")
    await page.keyboard.press("Tab") 
    const mail = page.locator('#email')
    await mail.focus()
})





test('backspace11', async({page})=>{

                await page.goto('https://testautomationpractice.blogspot.com/')
                 const input = page.locator('#name')
                  await input.click()
                  await input.fill("SaiGaneshh") 
                 await input.press('Backspace') 
                 await expect(input).toHaveValue("SaiGanesh") 
                 await input.press('Tab')
                 const mail = page.locator('#email')
                 await expect(mail).toBeFocused()
                 await mail.fill("saiganesh@gmail.com")
                 await mail.press('Shift+Tab')
                 await expect(input).toBeFocused()
                 await input.press('Control+A')
                 await input.type("Krishna")
                 await expect(input).toHaveValue("Krishna")
                 await page.keyboard.down('Shift')
                 await page.keyboard.press("ArrowLeft");
                 await page.keyboard.press('Delete');
                 await expect(input).toHaveValue('Krishn')
                 await page.waitForTimeout(2000);
})

test('Keyboard Actions5', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const name = page.locator('#name') 

    await name.fill("Sai Ganesh") 

    const mail = page.locator("//input[@id='email']") 

    await mail.fill("saiganesh@gmail.com")

    const phone = page.locator("input[id='phone']")

    await phone.fill("9876543210")

    await expect(name).toHaveValue("Sai Ganesh")

    await expect(mail).toHaveValue("saiganesh@gmail.com")

    await expect(phone).toHaveValue("9876543210")

})

test('Keyboard Actions6', async({page})=>{



    await page.goto('https://testautomationpractice.blogspot.com/')



    await page.getByText('Start')

    await page.waitForTimeout(2000) 

    const element = page.getByText('Hello World!')

    await expect(element).toBeHidden()



})


test('Keyboard Actions7', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/key_presses')

    const input = page.locator('#target')   

    await input.focus()

    await page.keyboard.press('Enter')

    const message = page.locator('#result')

    await expect(message).toHaveText("You entered: ENTER")

    await page.waitForTimeout(3000)
})


test('Keyboard Actions8', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/key_presses')

    const input = page.locator('#target')   

    await input.focus()

    await page.keyboard.press('Enter')

    const message = page.locator('#result')

    await expect(message).toContainText("ENTER")

    await page.waitForTimeout(3000)
})

test('Keyboard Actions10', async({page})=>{







    await page.goto('https://testautomationpractice.blogspot.com/')







    const sunday = page.locator('#sunday') 







    await sunday.check() 

    const monday = page.locator('#monday')

    await monday.check()  

    await expect(sunday).toBeChecked() 
 



    await expect(monday).toBeChecked()

    await sunday.uncheck()

    await expect(sunday).not.toBeChecked()   

    await expect(monday).toBeChecked() 

})

test.only('Keyboard Actions12', async({page})=>{































    await page.goto('https://testautomationpractice.blogspot.com/')































    const name = page.locator("table[name='BookTable'] tbody tr")
    await expect(name).toHaveCount(7)



});



