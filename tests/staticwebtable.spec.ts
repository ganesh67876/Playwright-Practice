import { test, expect, Locator } from '@playwright/test';

test('Static Web Table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.waitForTimeout(7000);

    await page.locator('table[name="BookTable"] tbody')

    //1) count number of rows in the table

    const rowCount = await page.locator('table[name="BookTable"] tbody tr').count();
    expect(rowCount).toBe(7);
    console.log("Number of rows in the table: " + rowCount);

    await page.waitForTimeout(3000);

    //2) count number of columns in the table

    const columnCount = await page.locator('table[name="BookTable"] tbody th').count();
    expect(columnCount).toBe(4);
    console.log("Number of columns in the table: " + columnCount);

    //3) capture all the data from the 2nd row

    const secondRowData = await page.locator('table[name="BookTable"] tbody tr').nth(1).locator('td').allTextContents();
    console.log('Second row data:', secondRowData);

    expect(secondRowData).toEqual( [ 'Learn Selenium', 'Amit', 'Selenium', '300' ]);


    for (let option of secondRowData){
        console.log(option)
    }
    

    //3) printing all the table data

    const allTableData = (await page.locator('table[name="BookTable"] tbody tr').allTextContents()).map(text=>text.trim());
    console.log('All table data:', allTableData);

    const rowdata = await page.locator('table[name="BookTable"] tbody tr').all()
    
    for (let data1 of rowdata.slice(1)){
        const cols = await data1.locator('td').allInnerTexts();
        console.log(cols)
    }

});