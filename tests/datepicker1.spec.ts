import { test, expect } from '@playwright/test';

test('Date Picker', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const dateInput = page.locator('#datepicker');
    await expect(dateInput).toBeVisible();

    // Open the calendar
    await dateInput.click();

    const year = "2026";
    const month = "July";
    const day = "10";

    while (true) {

        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if (currentYear === year && currentMonth === month) {
    break;
}
else if (
    Number(currentYear) < Number(year) ||
    (Number(currentYear) === Number(year) && currentMonth! < month)
) {
    await page.locator('.ui-datepicker-next').click();
}
else {
    await page.locator('.ui-datepicker-prev').click();
}
    }

    const allDates = await page.locator('.ui-datepicker-calendar td a').all();

    for (const dt of allDates) {

        const dateText = await dt.innerText();

        if (dateText === day) {
            await dt.click();
            break;
        }
    }

    await expect(dateInput).toHaveValue('07/10/2026');
});