import { test, expect } from '@playwright/test';

test("Create User API", async ({ request }) => {

    const loginResponse = await request.post(
        'https://stgclickscan.terralogic.com/api/v1/auth/login',
        {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            data: {
                username: 'Ganesh9898',
                password: 'Sai123*#'
            }
        }
    );

    const loginBody = await loginResponse.json();
    const token = loginBody?.accessToken;

    console.log("Login Status:", loginResponse.status());
    console.log("Token:", token);

    expect(loginResponse.status()).toBe(201);
    expect(token).toBeTruthy();

    // ✅ FIX HERE
    const uniqueId = Date.now();

    const requestBody = {
        email: `ganesh${uniqueId}@gmail.com`,
        username: `GAN${uniqueId}`,
        description: "No description",
        role_id: [3],
        database_id: [1]
    };

    const response = await request.post(
        "https://stgclickscan.terralogic.com/api/v1/user",
        {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
                'x-Tenent-Id': 'YC8BeJbRwC'
            },
            data: requestBody
        }
    );

    const responseBody = await response.json();

    console.log("Create User Status:", response.status());
    console.log("Create User Response:", responseBody);

    expect(response.status()).toBe(200);
    expect(responseBody.statusCode).toBe(201);
    expect(responseBody.payload).toHaveProperty('id');
    expect(responseBody.payload).toHaveProperty('email');
});