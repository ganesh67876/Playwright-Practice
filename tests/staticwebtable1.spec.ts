import{test, expect, Locator} from '@playwright/test';

test('staticwebtable', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('table[name="BookTable"] tbody')


    //1) Count the total number of rows

    const rows = await page.locator('table[name="BookTable"] tbody tr').count()
    console.log('total rows count:',rows)

    //2) Count the total number of columns
 
    const cols = await page.locator('table[name="BookTable"] tbody th').count()
    console.log('total columns count:',cols)

     //3) Print only the 3rd row

    const thirdrow = await page.locator('table[name="BookTable"] tbody tr').nth(3).locator('td').allTextContents()
    console.log(thirdrow)

    expect(await thirdrow).toEqual([ 'Learn JS', 'Animesh', 'Javascript', '300' ])

    //4) Print all table data

    const data2 = page.locator('table[name="BookTable"] tbody tr').all();

    for(let data1 of await data2){
          const filter = await data1.locator('td').allInnerTexts()
          console.log(filter)
    }

    //5) Print only the 2nd column

    const secondcolumn = await page.locator('table[name="BookTable"] tbody tr td:nth-child(2)').allTextContents()
    console.log(secondcolumn)

    //6) Print the value in Row 4, Column 2.

    const fourthsecond = await page.locator('table[name="BookTable"] tbody tr').nth(3).locator('td:nth-child(2)').allTextContents()
    console.log(fourthsecond)


    //7) Print all book names.

    const booknames = await page.locator('table[name="BookTable"] tbody tr td:nth-child(1)').allTextContents()
    console.log(booknames)
    
    //8) print all Authors.

    const authors = await page.locator('table[name="BookTable"] tbody tr td:nth-child(2)').allTextContents()
    console.log(authors)

    // 10) Verify whether the author Mukesh exists.

    const mukesh = await page
  .locator('table[name="BookTable"] tbody tr td:nth-child(2)')
  .allTextContents();

const exists = mukesh.some(name => name.trim() === 'Mukesh');

console.log(exists);


})