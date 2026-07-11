import {test, expect, Locator} from '@playwright/test';

test('DropDown', async ({ page }) => {
      
    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator('#country').selectOption('India');
    //await page.locator('#country').selectOption({ label: 'India' });
    // await page.locator('#country').selectOption({ index: 1 });
    // await page.locator('#country').selectOption({ value: 'India' });

    // check count of elements in dropdown

    const countofelements = await page.locator('#country option')
    console.log(await countofelements.count());

    // print the values from dropdown
    const dropdownValues: string[] = (await countofelements.allTextContents()).map(text=>text.trim());
    console.log(dropdownValues);

    expect(dropdownValues).toContain('India');

    const all: string[] = (await page.locator('#country option').allTextContents()).map(text=>text.trim());
    console.log(all);

    //printing options options in the form of list

    for(let option of all){
        console.log(option);
    }

    //
})