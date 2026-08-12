const { webkit } = require('playwright');
(async () => {
  const browser = await webkit.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://stgclickscan.terralogic.com/login');
  await page.locator("input[placeholder='Enter username']").fill('SAIGANESH');
  await page.locator("input[placeholder='Enter password']").fill('Ganesh760*#');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForURL('**/dashboard', { timeout: 30000 });

  await page.goto('https://stgclickscan.terralogic.com/drawer-management');
  await page.waitForLoadState('networkidle');
  const createBtn = page.getByRole('button', { name: /Create New Drawer/i });
  console.log('CREATE_COUNT', await createBtn.count());
  if ((await createBtn.count()) > 0) {
    await createBtn.first().click();
  }
  const drawerName = `WK_DRAWER_${Date.now()}`;
  await page.getByPlaceholder('Enter drawer name').fill(drawerName);
  const fieldName = page.getByPlaceholder('e.g., Document ID, Customer Name');
  await fieldName.fill('First_Name');
  await page.getByLabel('WIDTH').fill('100');
  await page.getByRole('button', { name: 'Insert Field' }).click();
  const keyRef = page.getByRole('checkbox', { name: 'Key Reference' });
  await keyRef.check();
  await fieldName.fill('Last_Name');
  await page.getByLabel('WIDTH').fill('100');
  await page.getByRole('button', { name: 'Insert Field' }).click();
  await fieldName.fill('SSN');
  await page.getByLabel('WIDTH').fill('100');
  await page.getByRole('button', { name: 'Insert Field' }).click();
  const saveBtn = page.getByRole('button', { name: 'Save Drawer' });
  console.log('SAVE_COUNT', await saveBtn.count());
  await saveBtn.click();
  await page.waitForTimeout(6000);
  console.log('URL_AFTER_SAVE', page.url());
  console.log('BODY_AFTER_SAVE');
  console.log((await page.locator('body').innerText()).slice(0, 2500));
  await browser.close();
})();
