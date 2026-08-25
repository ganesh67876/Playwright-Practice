import { test, expect } from '../fixtures/testBase';

test('User Management', async ({ page, appPage }) => {
    await page.goto('https://stgclickscan.terralogic.com/user-management');
    await page.getByRole('button', { name: /Create New User/i }).click({ force: true });

    const username = `Gysg${Date.now().toString().slice(-4)}`;
    const email = `${username}@gmail.com`;

    await page.getByRole('textbox', { name: /Username/i }).fill(username);
    await page.getByRole('textbox', { name: /Email/i }).fill(email);

    await page.getByRole('button', { name: /Create User/i }).click({ force: true });

    await expect.poll(async () => {
        return (await page.locator('body').innerText()).toLowerCase();
    }, { timeout: 25000 }).toContain(username.toLowerCase());
});