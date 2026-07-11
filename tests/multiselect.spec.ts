import { test, expect } from '@playwright/test';

test('Select colors from the dropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.locator('#colors').selectOption([{label: 'Red'}, {label: 'Green'}]);
    // await page.locator('#colors').selectOption([{index:0}, {index:1}]);

    //await page.waitForTimeout(2000); // Wait for 2 seconds to observe the selection


    //check number of options in the sropdown

    //const countOptions = await page.locator('#colors option').allInnerTexts();
    //console.log(countOptions)

    const allOptions:string[] = (await page.locator('#colors option').allTextContents()).map(text=>text.trim());
    console.log(allOptions);


    for (let option of allOptions){
        console.log(option);
    }

});