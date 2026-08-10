import {test,expect} from '@playwright/test'

test('Date Picker', async({page})=>{

     await page.goto('https://testautomationpractice.blogspot.com/');

     const date1 = page.locator(`input[id='datepicker']`);

     //1) first approch using fill option

     /*await expect(date1).toBeVisible();
     await date1.fill('05/23/2025');*/

     // 2) using the date picker

     const year = '2025'
     const month = 'april'
     const date = '27'

     await date1.click();

     while (true) {
        const expectedMonth = await page.locator('.ui-datepicker-month').textContent();
        const expectedYear = await page.locator('.ui-datepicker-year').textContent();

        if (expectedMonth === month && expectedYear === year) {
           break;
        }

        
     }
    
     const allDates = page.locator(`table[class='ui-datepicker-calendar'] td`).all()

     for(const dt of await allDates){
        const data1 = await dt.innerText()
        if(data1 == date){
            dt.click();
            break;
        }
     }
});
