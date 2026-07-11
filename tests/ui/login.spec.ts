import { test, expect } from '../../fixtures/testBase';

test.describe('Login Module UI Tests', () => {

    test('TC-01: Verify successful login to ClickScan', async ({ loginPage }) => {
        await loginPage.navigate();
        await loginPage.login('Gysg', 'Sai123*#');
        
        await expect(loginPage.dashboardHeader).toBeVisible();
    });
});
