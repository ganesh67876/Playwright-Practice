import { test, expect } from '@playwright/test';



test('Date Picker', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    const dateInput = page.locator('#datepicker');
    await expect(dateInput).toBeVisible();

    await dateInput.click();

    const year = "2030";
    const month = "September";
    const day = "18";

    while(true){

            const expectedYear = await page.locator(".ui-datepicker-year").textContent();
            const expectedMonth = await page.locator(".ui-datepicker-month").textContent();
            if(expectedYear == year && expectedMonth == month){
                      break;
            }
            else if( Number(expectedYear) < Number(year) || Number(expectedMonth) < Number(month) )
            {
                await page.locator(".ui-datepicker-next").click()
            }
           else{
                await page.locator(".ui-datepicker-prev").click()
            }

}

const allDates = await page.locator(".ui-datepicker-calendar td").all()
for (const dt of allDates){
     const data1 = await dt.innerText()
     if(data1 == day){
         await dt.click()
         break;
     }
}

await expect(dateInput).toHaveValue("09/18/2030")
})