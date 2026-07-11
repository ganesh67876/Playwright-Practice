import { test } from "@playwright/test";

test('pagination table', async ({ page }) => {
  await page.goto("https://datatables.net/");

  const paginationButtons = page.locator("//button[@class='dt-paging-button']");
  const totalButtons = await paginationButtons.count();
  const expectedName = "aric nguyn";

  for (let i = 0; i < totalButtons; i++) {
    const dataValues = page.locator("//tbody/tr/td[contains(@class,'dtr-control') and contains(@class,'sorting_1')]");
    const rowCount = await dataValues.count();

    for (let j = 0; j < rowCount; j++) {
      const data = await dataValues.nth(j).textContent();
      if (data?.trim().toLowerCase() === expectedName) {
        console.log("pass");
        break;
      }
    }

    if (i < totalButtons - 1) {
      await paginationButtons.nth(i).click();
      await page.waitForTimeout(500);
    }
  }
});