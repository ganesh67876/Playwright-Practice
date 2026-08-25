import { test, expect } from '../fixtures/testBase';

test('Custom Fixture Demo', async ({ page, appPage }) => {

    await expect(page).toHaveTitle(/Automation Testing Practice/i);

});