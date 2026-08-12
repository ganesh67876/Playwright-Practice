import { test, expect } from '../fixtures/testBase';

test('Verify Drawer Management', async ({ page, appPage }) => {
    const drawerName = `GaneshDrawer_${Date.now()}`;
    await page.goto('https://stgclickscan.terralogic.com/drawer-management');
    await page.getByRole('button', { name: /Create New Drawer/i }).click({ force: true });
    await page.getByPlaceholder('Enter drawer name').fill(drawerName);

    const fieldName = page.getByPlaceholder('e.g., Document ID, Customer Name');
    await fieldName.fill('First_Name');
    await page.getByLabel('WIDTH').fill('100');
    await page.getByRole('button', { name: 'Insert Field' }).click({ force: true });

    const keyReferenceCheckbox = page.getByRole('checkbox', { name: 'Key Reference' });
    await keyReferenceCheckbox.check();
    await expect(keyReferenceCheckbox).toBeChecked();

    await fieldName.fill('Last_Name');
    await page.getByLabel('WIDTH').fill('100');
    await page.getByRole('button', { name: 'Insert Field' }).click({ force: true });

    await fieldName.fill('SSN');
    await page.getByLabel('WIDTH').fill('100');
    await page.getByRole('button', { name: 'Insert Field' }).click({ force: true });

    await page.getByRole('button', { name: 'Save Drawer' }).click({ force: true });

    const yesButton = page.getByRole('button', { name: /^Yes$/i });
    if (await yesButton.count()) {
        await yesButton.click({ force: true });
    }

    await expect.poll(async () => {
        return (await page.locator('body').innerText()).toLowerCase();
    }, { timeout: 30000 }).toContain(drawerName.toLowerCase());
});