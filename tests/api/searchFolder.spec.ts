import { test, expect } from '../../fixtures/testBase';

test.describe('Search Folder API Tests', () => {
    let token: string;

    test.beforeEach(async ({ loginAPI }) => {
        const loginResponse = await loginAPI.login('Gysg', 'Sai123*#');
        expect(loginResponse.status()).toBe(201);
        
        const loginBody = await loginResponse.json();
        token = loginBody?.accessToken;
        expect(token).toBeTruthy();
    });

    test('TC-01: Verify user can search folders via API', async ({ searchAPI }) => {
        // x-tenant-id is usually '7' for search according to APITesting.spec.ts
        const response = await searchAPI.searchFullFolder(token, '7', '');
        expect(response.status()).toBe(200);
        
        const bodyText = await response.text();
        expect(bodyText).toBeTruthy();
    });
});
