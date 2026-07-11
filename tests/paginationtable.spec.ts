import {test, expect, Locator} from "@playwright/test"

test('pagination table', async ({page})=>{

    await page.goto("https://datatables.net/");

    let morerows = true;

    while(morerows){
    const pt = await page.locator('#example tbody tr').all()
    for(const row of pt){
        console.log(await row.innerText())
    }
    const next = await page.locator('button[aria-label="Next"]')
    const isDisabled = await next.getAttribute('class')
     
    if(isDisabled?.includes('disabled'))
    {
          morerows = false
    }
    else{
         await next.click()
    }

    await page.waitForTimeout(3000)
    }

})