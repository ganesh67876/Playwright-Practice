import { test, expect } from '../../fixtures/testBase';

test.describe('Folder Management API Tests', () => {

    let token: string;

    test.beforeEach(async ({ loginAPI }) => {
        const loginResponse = await loginAPI.login('Ganesh9898', 'Sai123*#');
        
        expect(loginResponse.status()).toBe(201);
        
        const loginBody = await loginResponse.json();
        token = loginBody?.accessToken;
        
        expect(token).toBeTruthy();
    });

    test('TC-01: Verify user can create a new folder via API', async ({ folderAPI }) => {
        const uniqueId = Date.now().toString().slice(-6);
        const drawerName = `DrawerForFolder_${uniqueId}`;
        const folderName = `TestFolder_${uniqueId}`;

        // 1. Create Drawer (Prerequisite for Folder)
        const drawerResponse = await folderAPI.createDrawer(token, drawerName);
        expect(drawerResponse.status()).toBe(201);
        
        const drawerBody = await drawerResponse.json();
        const drawerId = drawerBody.payload?.id || drawerBody.payload?.drawer_id || drawerBody.payload?.drawerId;
        expect(drawerId).toBeTruthy();

        // 2. Create Folder
        const folderResponse = await folderAPI.createFolder(token, folderName, drawerId);
        expect(folderResponse.status()).toBe(201);
        
        const folderBody = await folderResponse.json();
        expect(folderBody?.payload).toHaveProperty('name', folderName);
    });

});
