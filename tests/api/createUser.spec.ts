import { test, expect } from '../../fixtures/testBase';

test.describe('User Management API Tests', () => {
    let token: string;

    test.beforeEach(async ({ loginAPI }) => {
        const loginResponse = await loginAPI.login('Ganesh9898', 'Sai123*#');
        expect(loginResponse.status()).toBe(201);
        
        const loginBody = await loginResponse.json();
        token = loginBody?.accessToken;
        expect(token).toBeTruthy();
    });

    test('TC-01: Verify user can create a new user via API', async ({ userAPI }) => {
        const uniqueId = Date.now().toString().slice(-6);
        const email = `ganesh${uniqueId}@gmail.com`;
        const username = `GAN${uniqueId}`;

        const response = await userAPI.createUser(token, email, username);
        const responseBody = await response.json();

        expect(response.status()).toBe(200);
        expect(responseBody.statusCode).toBe(201);
        expect(responseBody.payload).toHaveProperty('id');
        expect(responseBody.payload).toHaveProperty('email');
    });
});
