import {test, expect, Locator} from '@playwright/test';

test('Dynamic Tables', async ({ page }) => {
   
    await page.goto('https://practice.expandtesting.com/dynamic-table', { 
        waitUntil: 'domcontentloaded',
        timeout: 60000 
    })

    await page.waitForTimeout(10000)

    const tabledata = await page.locator('table.table tbody')
    console.log(tabledata)
    expect(tabledata).toBeVisible();

    //1) pronting the all rows in the table 

    const rows = await tabledata.locator("tr").count()
    console.log('Total number of rows', rows)

    //2) Print the total number of columns.

    const cols = await page.locator("table.table thead th").count()
    console.log('total number of', cols)

    //3) Print all the column names.
    
    const colsnames = (await page.locator("table.table thead th").allInnerTexts()).map(text=>text.trim())
    console.log('total number of', colsnames)

    //4) Print all process names

    const names = await page.locator("table.table tbody tr td:first-child").allInnerTexts()
    console.log('names',names)

    // Print the CPU value of Chrome
    
    const condition1:Locator[] = await tabledata.locator("tr").all()
    
    for (const data1 of condition1){
        const reprocess = await data1.locator("td").allInnerTexts()
        if(reprocess[0] === 'Chrome'){
            const result = await data1.locator("td", {hasText:'%'}).innerText()
            console.log('Chrome CPU:', result)
        }
    }
    
    //Print the Memory value of Firefox.

    const check1:Locator[] = await tabledata.locator("tr").all()

    for(const data2 of check1){
        const reprocess1 = await data2.locator("td").allInnerTexts()
        if(reprocess1[0] === 'Firefox'){
            const result1 = await data2.locator("td").nth(2).allInnerTexts()
            console.log('Memory:',result1)
        }
    }

    //Print the Network value of System.

    const point:Locator[] = await tabledata.locator("tr").all()

    for (const data3 of point) {
    const reprocess3 = await data3.locator("td").allInnerTexts();

    if (reprocess3[0] === "System") {
        const result3 = await data3.locator("td").nth(1).innerText();
        console.log("System:", result3);
    }
}

})
