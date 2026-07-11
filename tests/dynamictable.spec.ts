import {test, expect, Locator} from '@playwright/test';

test('Dynamic Tables', async ({ page }) => {
   
    await page.goto('https://practice.expandtesting.com/dynamic-table')

    //For Chrome process get value of  CPU load.

    const values = await page.locator('table.table tbody')

    const rows:Locator[] = await values.locator("tr").all()
    console.log('values',rows.length)
    expect(rows).toHaveLength(4)


    for(const data1 of rows){

        const reprocess = await data1.locator("td").nth(0).innerText();
        if(reprocess == 'Chrome'){
                 const result = await data1.locator("td",{hasText :'%'}).innerText();
                 console.log(result)
        }
    }



    await page.waitForTimeout(5000);

})