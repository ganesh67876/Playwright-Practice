const { webkit } = require('playwright');
(async () => {
  const browser = await webkit.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://stgclickscan.terralogic.com/login');
  await page.locator("input[placeholder='Enter username']").fill('SAIGANESH');
  await page.locator("input[placeholder='Enter password']").fill('Ganesh760*#');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForURL('**/dashboard', { timeout: 30000 });
  await page.goto('https://stgclickscan.terralogic.com/user-management');
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: /Create New User/i }).click();
  const username = `Gysg${Date.now().toString().slice(-4)}`;
  const email = `${username}@gmail.com`;
  await page.getByRole('textbox', { name: /Username/i }).fill(username);
  await page.getByRole('textbox', { name: /Email/i }).fill(email);
  const btn = page.getByRole('button', { name: /Create User/i });
  console.log('CREATE_USER_BUTTON_COUNT', await btn.count());
  await btn.click();
  const yes = page.getByRole('button', { name: /^Yes$/i });
  console.log('YES_COUNT', await yes.count());
  if ((await yes.count()) > 0) {
    await yes.click();
  }
  await page.waitForTimeout(6000);
  console.log('AFTER_CREATE_URL', page.url());
  console.log('BODY_AFTER_CREATE_START');
  console.log((await page.locator('body').innerText()).slice(0, 3000));
  console.log('BODY_AFTER_CREATE_END');
  await browser.close();
})();
