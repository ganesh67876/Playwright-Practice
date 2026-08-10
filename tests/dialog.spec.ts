// there are three dialogs --- alert(), confirm() and prompt()
// dialogs are auto dismissed by the playwright. however, we can register a dialog handler before the action trigger like dialog.accept() or dialog.dismiss()

import {test, expect, Locator} from "@playwright/test";

/*test('simple dialog', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // use double quotes for the string so the XPath single quotes don't conflict
    // Register for dialog handler
    page.on('dialog', async (dialog) => {
        console.log('dialog type', dialog.type()) // type of dialog
        expect(dialog.type()).toBe('alert')
        console.log('text message', dialog.message()) // prints the dialog message
        expect(dialog.message()).toBe("I am an alert box!")
        await dialog.accept()

})
    await page.locator('#confirmBtn').click();

    await page.waitForTimeout(5000);
});*/


/*test('confirm dialog', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // use double quotes for the string so the XPath single quotes don't conflict
    // Register for dialog handler
    page.on('dialog', async (dialog) => {
        console.log('dialog type', dialog.type()) // type of dialog
        expect(dialog.type()).toBe('confirm')
        console.log('text message', dialog.message()) // prints the dialog message
        expect(dialog.message()).toBe("Press a button!")
        await dialog.dismiss()

})
    await page.locator('#confirmBtn').click();

    const message = page.locator('#demo').innerText()
    console.log('meaasge:', await message)
    expect(page.locator('#demo')).toHaveText('You pressed Cancel!')
    await page.waitForTimeout(5000);
});*/



test('prompt dialog', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // use double quotes for the string so the XPath single quotes don't conflict
    // Register for dialog handler
    page.on('dialog', async (dialog) => {
        console.log('dialog type', dialog.type()) // type of dialog
        expect(dialog.type()).toBe('prompt')
        console.log('text message', dialog.message()) // prints the dialog message
        expect(dialog.message()).toBe("Please enter your name:")
        expect(dialog.defaultValue()).toContain("Harry Potter")
        dialog.accept("John")

})
    await page.locator('#promptBtn').click();

    const message = page.locator('#demo').innerText()
    console.log('meaasge:', await message)
    expect(page.locator('#demo')).toHaveText('Hello John! How are you today?')
    await page.waitForTimeout(5000);
});