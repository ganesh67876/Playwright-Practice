import { test, expect } from '../../fixtures/testBase';

test.describe('Drawer Management UI Tests', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigateTo("https://clickscan.terralogic.com/drawer-management");
        await loginPage.login('Gysg', 'Sai123*#');
        await expect(loginPage.dashboardHeader).toBeVisible();
    });

    test('TC-01: Verify user can create a new drawer via UI', async ({ drawerManagementPage, page }) => {
        await drawerManagementPage.clickCreateNewDrawer();
        
        const uniqueId = Date.now().toString().slice(-6);
        await drawerManagementPage.enterDrawerName(`GaneshDrawer_${uniqueId}`);
        
        // Add Field 1
        await drawerManagementPage.addField("First_Name", "100");
        
        // Check all Checkboxes
        await drawerManagementPage.checkAllKeyReferences();
        await expect(drawerManagementPage.keyReferenceCheckbox.first()).toBeChecked();
        
        // Add Field 2
        await drawerManagementPage.addField("Last_Name", "100");
        
        // Add Field 3
        await drawerManagementPage.addField("SSN", "100");
        
        // Save
        await drawerManagementPage.saveDrawer();
        
        // Wait for potential network resolution
        await page.waitForTimeout(5000); 
    });
});
